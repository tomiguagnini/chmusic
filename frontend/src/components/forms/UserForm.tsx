import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserValidation } from "@/lib/validation";
import { useState } from "react";
import Spinner from "../shared/Spinner";
import { createPreference } from "@/services";
import { useCart } from "@/hooks/useCart";
function UserForm() {
    const [loading, setLoading] = useState(false);
    const {cart} = useCart()

    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
          
        },
    });

    async function onSubmit(values: z.infer<typeof UserValidation>) {
        try {
            setLoading(true);
            createPreference({
                user:values,
                items:cart
            })
            .then((response)=>{
                window.location.href = response.data.url
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
                        name="FirstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
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
                        name="LastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido</FormLabel>
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
                        name="Email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
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
                        name="Phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefono</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
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
                        name="Dni"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dni</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
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
                            Ir al Pago
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default UserForm;
