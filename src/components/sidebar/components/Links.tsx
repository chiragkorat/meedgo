/* eslint-disable */

// chakra imports
import {
  Box, Flex, HStack, Text, useColorModeValue, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IRoute } from 'types/navigation'

interface SidebarLinksProps {
  routes: IRoute[]
}


export function SidebarLinks(props: SidebarLinksProps) {
  const { routes } = props

  //   Chakra color mode
  const router = useRouter()

  let activeColor = useColorModeValue('gray.700', 'white')
  let inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  )
  let activeIcon = useColorModeValue('brand.500', 'white')
  let textColor = useColorModeValue('secondaryGray.500', 'white')
  let brandColor = useColorModeValue('brand.500', 'brand.400')

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return router.pathname.includes(routeName)
  }

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
      if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {

        if (route.parent) {
          return (
            <Accordion className='submenuToggle' allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box>
                    <HStack
                      spacing={
                        activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                      }
                      py='5px'
                      ps='10px'
                    >
                      <Flex w='100%' alignItems='center' justifyContent='center'>
                        <Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : textColor
                          }
                          me='18px'
                        >
                          {route.icon}
                        </Box>
                        <Text
                          me='auto'
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : textColor
                          }
                          fontWeight={
                            activeRoute(route.path.toLowerCase())
                              ? 'bold'
                              : 'normal'
                          }
                        >
                          {route.name}
                        </Text>
                      </Flex>
                      <Box
                        h='36px'
                        w='4px'
                        bg={
                          activeRoute(route.path.toLowerCase())
                            ? brandColor
                            : 'transparent'
                        }
                        borderRadius='5px'
                      />
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                {
                    route.parent.map((item: any, index: number) => {
                      return (<Link key={index} href={item.layout + item.path}>
                        <a>
                          <Box>
                            <HStack
                              spacing={
                                activeRoute(item.path.toLowerCase()) ? '22px' : '26px'
                              }
                              py='5px'
                              ps='10px'
                            >
                              <Text
                                me='auto'
                                color={
                                  activeRoute(item.path.toLowerCase())
                                    ? activeColor
                                    : inactiveColor
                                }
                                fontWeight={
                                  activeRoute(item.path.toLowerCase())
                                    ? 'bold'
                                    : 'normal'
                                }
                              >
                                {item.name}
                              </Text>
                            </HStack>
                          </Box>
                        </a>
                      </Link>)
                    })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          )
        } else {
          return (
            <Link key={index} href={route.layout + route.path}>
              <a>
                {route.icon ? (
                  <Box>
                    <HStack
                      spacing={
                        activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                      }
                      py='5px'
                      ps='10px'
                    >
                      <Flex w='100%' alignItems='center' justifyContent='center'>
                        <Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : textColor
                          }
                          me='18px'
                        >
                          {route.icon}
                        </Box>
                        <Text
                          me='auto'
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : textColor
                          }
                          fontWeight={
                            activeRoute(route.path.toLowerCase())
                              ? 'bold'
                              : 'normal'
                          }
                        >
                          {route.name}
                        </Text>
                      </Flex>
                      <Box
                        h='36px'
                        w='4px'
                        bg={
                          activeRoute(route.path.toLowerCase())
                            ? brandColor
                            : 'transparent'
                        }
                        borderRadius='5px'
                      />
                    </HStack>
                  </Box>
                ) : (
                  <Box>
                    <HStack
                      spacing={
                        activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                      }
                      py='5px'
                      ps='10px'
                    >
                      <Text
                        me='auto'
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : inactiveColor
                        }
                        fontWeight={
                          activeRoute(route.path.toLowerCase())
                            ? 'bold'
                            : 'normal'
                        }
                      >
                        {route.name}
                      </Text>
                      <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                    </HStack>
                  </Box>
                )}
              </a>
            </Link>
          )
        }
      }
    })
  }
  //  BRAND
  return <>{createLinks(routes)}</>
}

export default SidebarLinks
