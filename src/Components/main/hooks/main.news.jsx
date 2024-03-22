import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Stack,
    Box,
    Heading,
    Text,
    StackDivider
} from '@chakra-ui/react'

export default function News() {

    return (
        <div>
            <Card height={'600px'}>
                <CardHeader>
                    <Heading size='md'></Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Summary
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Overview
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Analysis
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        See a detailed analysis of all your business clients.
                        </Text>
                    </Box>
                    </Stack>
                </CardBody>
                </Card>
        </div>
    )
}