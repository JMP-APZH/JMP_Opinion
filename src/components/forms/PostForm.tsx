import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import FileUploader from "../shared/FileUploader"
import { PostValidation } from "@/lib/validation"
import { Models } from "appwrite"
import { useCreatePost } from '@/lib/react-query/queriesAndMutations'
import { useUserContext } from "@/context/AuthContext"
import { useToast } from "../ui/use-toast"
import { useNavigate } from "react-router-dom"

type PostFormProps = {
    post?: Models.Document;
}

const PostForm = ({ post }: PostFormProps) => {

    const { mutateAsync: createPost, isPending: isLoadingCreate } = useCreatePost();
    const { user } = useUserContext();
    const { toast } = useToast();
    const navigate = useNavigate();

    // 1. Define your form.
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post?.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(value: z.infer<typeof PostValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newPost2= { ...value, userId: user.id }
    const newPost = createPost({
        ...value, userId: user.id,
    })

    
    
    console.log('User ID:', user.id)
    console.log('New NewPost:', newPost)
    console.log('New NewPost2:', newPost2)

    if(!newPost) {
        toast({
            title: 'Please try again'
        })
    }
    navigate('/')

    console.log('Complete Post:',value)

    return newPost2
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Caption
            </FormLabel>
              <FormControl>
                <Textarea className='shad-textarea custom-scrollbar' placeholder="type your caption here..." {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Photos
            </FormLabel>
              <FormControl>
                <FileUploader 
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Location
            </FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" { ...field } />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Tags (separated by commas " , ")
            </FormLabel>
              <FormControl>
                <Input 
                    type='text' 
                    className="shad-input" 
                    placeholder="Art, Expression, Learn, ..."  
                    { ...field } 
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

    <div className="flex gap-4 items-center justify-end">
        <Button 
            type="button" 
            className="shad-button_dark_4"
        >
            Cancel
        </Button>

        {/* <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isLoadingCreate || isLoadingUpdate}>
            {(isLoadingCreate || isLoadingUpdate) && <Loader />}
            {action} Post
          </Button> */}

        <Button 
            type="submit"
            className="shad-button_primary whitespace-nowrap"
        >
            Submit
        </Button>
    </div>
      </form>
    </Form>

  )
}

export default PostForm