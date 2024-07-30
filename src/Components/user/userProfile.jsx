import { Container } from '@chakra-ui/react'
import Content from './content/content'
import Sidebar from './sidebar/sidebar'
import Cover from './cover'
import Header from '../../common/header'

export default function Main() {
    return (
        <>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} flexDir={"column"} maxW="container.xl">
                <Sidebar />
                <Content />
            </Container>
        </>
    )
}