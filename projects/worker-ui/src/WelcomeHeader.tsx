import { Box, PageHeader, Text } from '@primer/react';
import { DiamondIcon } from '@primer/octicons-react';
import { Stack } from '@primer/react';

export const WelcomeHeader = () => {
    return (
        <div className='border'>
            <PageHeader>
                <Box border>
                    <Stack align="center" direction="horizontal">
                        <Stack.Item>
                            <DiamondIcon size={32} fill='rgba(0,0,0,0.42)' verticalAlign='middle' />
                        </Stack.Item>
                        <Stack.Item>
                            <Text sx={{ color: 'fg.default', fontSize: '3', fontWeight: 'bold' }}>
                                <span color='fg.'>//</span>vsx.dev
                            </Text>
                        </Stack.Item>
                        <Stack.Item>
                            <Text sx={{ color: 'fg.default', fontSize: '3', fontWeight: 'light' }}>
                                validator stake nexus
                            </Text>
                        </Stack.Item>
                    </Stack>

                </Box>
            </PageHeader>
        </div >
    )
};