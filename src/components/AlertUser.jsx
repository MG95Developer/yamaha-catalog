import
{
    Alert,
    AlertDescription,
    Text,
    HStack,
    Box
} from '@chakra-ui/react'

export default function AlertUser()
{
    return (
        <Box>
            <Alert bg="#039" color="white" py={{ base: "20px", lg: "0px" }}>
                <AlertDescription height="50px" display="flex" justifyContent="center" alignItems="center">
                    <HStack>
                        <Text>We require you to have a <Text as="span" fontWeight="900">valid driving licence</Text> to be able to test-drive our vehicles.</Text>
                    </HStack>
                </AlertDescription>
            </Alert>
        </Box>
    )
}
