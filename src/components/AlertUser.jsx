import
{
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Text,
    HStack,
} from '@chakra-ui/react'

export default function AlertUser()
{
    return (
        <>
            <Alert bg="#039" color="white" py={{ base: "20px", lg: "0px" }}>

                <AlertTitle>Test-Drives:</AlertTitle>
                <AlertDescription height="50px" display="flex" justifyContent="center" alignItems="center">
                    <HStack>
                        <Text>We require you a <Text as="span" fontWeight="900">valid driving licence</Text> for you to be able to apply for a test-drive with us.</Text>
                    </HStack>
                </AlertDescription>
            </Alert>
        </>
    )
}
