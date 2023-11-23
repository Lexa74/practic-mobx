import React, {useState} from "react";
import {Center, Box, Stack, Input, Button, Divider, Spinner} from  '@chakra-ui/react'
import {useNavigate} from "react-router-dom";

interface Data {
    name: string
    age: number,
    index?: number
}

export function Login() {
    const navigate = useNavigate()
    const handlerLogin = () => {
        navigate('/')
    }

    return (
        <>
            <Center h={'100vh'} mt={4}>
                <Stack spacing={4} bg={'brand.800'} p={'33px 47px'} color={'brand.0'} borderRadius={'12px'}>
                    <Input placeholder={'Логин'} />
                    <Input placeholder={'Пароль'} />
                    <Divider color={'brand.200'} />
                    <Button onClick={handlerLogin} variant={'brandLight'}>Войти</Button>
                    <Button variant={'brandDark'}>Зарегистрироваться</Button>
                    <Spinner color='red.500' w={200} h={200} thickness={'10px'}/>
                </Stack>
            </Center>
        </>
    );
}