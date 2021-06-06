import React, { useState } from 'react'
import { Textarea } from "@chakra-ui/react"

import { Center, Wrap, WrapItem, Box, Badge, Stack } from "@chakra-ui/layout";
import marked from 'marked';
const Marked = () => {
    const [input, setinput] = useState(`
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    `)


    return (
        <Wrap mt="5" justify="center">
            <WrapItem p="4" mt="5" bg="gray.100">
                <Stack><h1><Badge variant="solid" colorScheme="green" mx="2">Editor</Badge></h1>
                <Center maxW="588px" h="500px">
                    
                    <Textarea w="800px" h="500px" value={input} onChange={(e) => {
                        setinput(e.target.value)
                    }} placeholder="Here is a sample placeholder" bg="white" id="editor" />
                </Center>
                </Stack>
            </WrapItem>

            <WrapItem p="4" mt="5" bg="gray.100" >
                <Stack><h1><Badge variant="solid" colorScheme="green" mx="1">Preview</Badge></h1>
                <Box w="588px" h="500px" bg="white" p="3" dangerouslySetInnerHTML={{
                    __html: marked(input),
                }}>
                </Box>
                </Stack>
            </WrapItem>
        </Wrap>
    )
}

export default Marked
