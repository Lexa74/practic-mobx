import React from "react";
import {
    Center,
    Stack,
    Input,
    Button,
    Text,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalContent,
    useDisclosure,
    ModalCloseButton,
    ModalBody

}
    from  '@chakra-ui/react'
import {useForm} from "react-hook-form";
import {loginApi} from "../../api/api.ts";

interface FormData {
    email: string;
    pass: string;
}

export function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({mode: "onChange"});
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (data: FormData) => {
        sessionStorage.setItem('user', data.email)
        document.cookie = `username=${JSON.stringify(data)}; expires=Thu, 21 Dec 2023 19:45:00 UTC; path=/`;
        console.log(JSON.parse(document.cookie.split(';')[0].split('=')[1]))
        console.log(data);
        loginApi({email: data.email, password: data.pass}).then((res) => console.log(res))
    };

    return (
        <>
            <Center h={'100vh'}>
                <Stack spacing={[4, 6, 8, 12]} bg='brand.800' p={'33px 47px'} color={'brand.0'} borderRadius={'12px'} w={'400px'} border={'1px solid gray'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder={'Логин'}
                            type="text"
                            id="email"
                            mb={[4, '20px']}
                            {...register('email',{
                                required: "Email обязателен",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Некорректный email"
                                }
                            })}
                        />
                        {errors.email && <Text color={'red.400'}>{errors.email.message}</Text>}
                        <Input placeholder={'Пароль'}
                           mb={4}
                           type="password"
                            id="pass"
                            {...register('pass',{
                                required: "Пароль обязательно",
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                    message: "Некорректный пароль"
                                }
                            })}
                        />
                        {errors.pass && <Text color={'red.400'}>{errors.pass.message}</Text>}

                        <Button type='submit' w={'100%'} colorScheme='purple'>Войти</Button>
                    </form>
                </Stack>

                {/*<Button onClick={onOpen}>Open Modal</Button>*/}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            dasdasd
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='brandLight'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
}