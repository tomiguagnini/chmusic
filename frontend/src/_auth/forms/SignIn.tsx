import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/Auth";
import { LoginValidation } from "@/lib/validation";
import { loginService } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
 

function SignIn() {
  const [loading, setLoading] = useState(false);
  const {login} = useAuth()
  const navigate = useNavigate();

    const form = useForm<z.infer<typeof LoginValidation>>({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
          Email:'',
          Password:''
        },
    });

    async function onSubmit(values: z.infer<typeof LoginValidation>) {
        try {
            setLoading(true);
            loginService(values)
            .then((response)=>{
                login(response.data.token)
                setLoading(false)
                navigate('/admin')
            })
            .catch(error=> console.log(error))
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
  return (
    <>
    {loading ? <Spinner /> : ""}
      <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex-col gap 9 w-full max-w-xl space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl> 
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                            
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" className=" bg-primary-500 w-full mt-4 hover:bg-primary-600">
                            Enviar
                        </Button>
                    </div>
                </form>
            </Form>
    </>
  )
}

export default SignIn