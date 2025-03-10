'use client';
import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  Avatar,
  Badge,
  HStack,
  VStack,
  useColorModeValue,
  Container,
  IconProps,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  AddIcon,
  ChevronDownIcon,
  QuestionIcon,
  InfoIcon,
  ExternalLinkIcon,
  TriangleUpIcon,
  TriangleDownIcon,
  StarIcon,
  InfoOutlineIcon,
} from '@chakra-ui/icons';

// Social media icons
const FacebookIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
    />
  </Icon>
);

const GithubIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
    />
  </Icon>
);

const TwitterIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
    />
  </Icon>
);

const GoogleIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
    />
  </Icon>
);

const DocsIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
    />
  </Icon>
);

const EllipsisIcon = (
  props: JSX.IntrinsicAttributes &
    Omit<
      React.SVGProps<SVGSVGElement>,
      'as' | 'translate' | keyof IconProps
    > & { htmlTranslate?: 'yes' | 'no' | undefined } & IconProps & {
      as?: 'svg';
    },
) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
    />
  </Icon>
);

const UserManagementDashboard = () => {
  const users = [
    {
      id: 1,
      name: 'Jese Leos',
      avatar: 'https://bit.ly/sage-adebayo',
      role: 'Administrator',
      status: 'Active',
      social: ['facebook', 'github', 'twitter', 'google'],
      promote: false,
      rating: { value: 4.7, trend: 'up' },
      lastLogin: '20 Nov 2022',
    },
    {
      id: 2,
      name: 'Bonnie Green',
      avatar: 'https://bit.ly/ryan-florence',
      role: 'Viewer',
      status: 'Active',
      social: ['facebook', 'github', 'twitter', 'google'],
      promote: true,
      rating: { value: 3.9, trend: 'down' },
      lastLogin: '23 Nov 2022',
    },
    {
      id: 3,
      name: 'Leslie Livingston',
      avatar: 'https://bit.ly/prosper-baba',
      role: 'Moderator',
      status: 'Inactive',
      social: ['facebook', 'github', 'docs'],
      promote: false,
      rating: { value: 4.8, trend: 'up' },
      lastLogin: '19 Nov 2022',
    },
    {
      id: 4,
      name: 'Micheal Gough',
      avatar: 'https://bit.ly/kent-c-dodds',
      role: 'Moderator',
      status: 'Active',
      social: ['facebook', 'github', 'twitter', 'docs'],
      promote: true,
      plusTwo: true,
      rating: { value: 5, trend: 'up' },
      lastLogin: '27 Nov 2022',
    },
    {
      id: 5,
      name: 'Joseph McFall',
      avatar: 'https://bit.ly/code-beast',
      role: 'Viewer',
      status: 'Active',
      social: ['facebook', 'github', 'twitter', 'google'],
      promote: false,
      rating: { value: 4.2, trend: 'down' },
      lastLogin: '20 Nov 2022',
    },
    {
      id: 6,
      name: 'Robert Brown',
      avatar: 'https://bit.ly/dan-abramov',
      role: 'Viewer',
      status: 'Inactive',
      social: ['facebook', 'github', 'twitter'],
      promote: false,
      rating: { value: 4.5, trend: 'up' },
      lastLogin: '20 Nov 2022',
    },
    {
      id: 7,
      name: 'Karen Nelson',
      avatar: 'https://bit.ly/tioluwani-kolawole',
      role: 'Viewer',
      status: 'Inactive',
      social: ['facebook', 'github', 'twitter', 'docs'],
      promote: false,
      plusTwo: true,
      rating: { value: 4.1, trend: 'down' },
      lastLogin: '18 Nov 2022',
    },
    {
      id: 8,
      name: 'Helene Engels',
      avatar: 'https://bit.ly/kent-c-dodds',
      role: 'Moderator',
      status: 'Active',
      social: ['facebook', 'github', 'twitter', 'google'],
      promote: true,
      rating: { value: 3.8, trend: 'down' },
      lastLogin: '27 Nov 2022',
    },
    {
      id: 9,
      name: 'Lana Byrd',
      avatar: 'https://bit.ly/sage-adebayo',
      role: 'Viewer',
      status: 'Active',
      social: ['facebook', 'github'],
      promote: false,
      rating: { value: 4.8, trend: 'up' },
      lastLogin: '20 Nov 2022',
    },
    {
      id: 10,
      name: 'Neil Sims',
      avatar: 'https://bit.ly/prosper-baba',
      role: 'Moderator',
      status: 'Inactive',
      social: ['facebook', 'github', 'twitter', 'google'],
      promote: false,
      rating: { value: 5.0, trend: 'up' },
      lastLogin: '20 Nov 2022',
    },
  ];

  // Colors and styling
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headerBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Container maxW="container.xl" p={5}>
      <Box
        border="1px"
        borderColor={borderColor}
        borderRadius="lg"
        bg={bgColor}
        boxShadow="sm"
        overflow="hidden"
      >
        {/* Header Section */}
        <Flex
          p={4}
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth="1px"
          borderColor={borderColor}
        >
          <Flex alignItems="center">
            <Text fontSize="md" fontWeight="medium">
              All Users:{' '}
            </Text>
            <Text fontSize="md" fontWeight="bold" ml={1}>
              1,356,546
            </Text>
            <Text fontSize="md" fontWeight="medium" ml={4}>
              Projects:{' '}
            </Text>
            <Text fontSize="md" fontWeight="bold" ml={1}>
              884
            </Text>
            <Tooltip hasArrow label="Help information">
              <InfoOutlineIcon ml={2} color="gray.400" />
            </Tooltip>
          </Flex>
          <Button size="sm" rightIcon={<SettingsIcon />} variant="outline">
            Table settings
          </Button>
        </Flex>

        {/* Action Buttons */}
        <Flex p={4} justifyContent="space-between" alignItems="center">
          <Button leftIcon={<AddIcon />} colorScheme="blue" size="md">
            Add new user
          </Button>
          <ButtonGroup size="md" variant="outline" spacing={4}>
            <Button>Suspend all</Button>
            <Button>Archive all</Button>
            <Button>Delete all</Button>
          </ButtonGroup>
        </Flex>

        {/* Table */}
        <Box overflowX="auto">
          <Table variant="simple" size="md">
            <Thead bg={headerBg}>
              <Tr>
                <Th px={4} py={3} width="50px">
                  <Checkbox colorScheme="blue" size="lg" />
                </Th>
                <Th px={4} py={3} color={textColor}>
                  USER
                </Th>
                <Th px={4} py={3} color={textColor}>
                  USER ROLE
                </Th>
                <Th px={4} py={3} color={textColor}>
                  STATUS
                </Th>
                <Th px={4} py={3} color={textColor}>
                  SOCIAL PROFILE
                </Th>
                <Th px={4} py={3} color={textColor}>
                  PROMOTE
                </Th>
                <Th px={4} py={3} color={textColor}>
                  RATING
                </Th>
                <Th px={4} py={3} color={textColor}>
                  LAST LOGIN
                </Th>
                <Th px={4} py={3} width="50px"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id} _hover={{ bg: 'gray.50' }}>
                  <Td px={4} py={3}>
                    <Checkbox colorScheme="blue" size="lg" />
                  </Td>
                  <Td px={4} py={3}>
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        src={user.avatar}
                        name={user.name}
                        mr={3}
                      />
                      <Text fontWeight="medium">{user.name}</Text>
                    </Flex>
                  </Td>
                  <Td px={4} py={3}>
                    <Badge
                      px={2}
                      py={1}
                      borderRadius="full"
                      colorScheme={
                        user.role === 'Administrator'
                          ? 'blue'
                          : user.role === 'Moderator'
                          ? 'purple'
                          : 'gray'
                      }
                      display="flex"
                      alignItems="center"
                      width="fit-content"
                    >
                      {user.role === 'Administrator' && (
                        <Box as="span" mr={1} fontSize="xs">
                          🔑
                        </Box>
                      )}
                      {user.role === 'Moderator' && (
                        <Box as="span" mr={1} fontSize="xs">
                          ⚡
                        </Box>
                      )}
                      {user.role === 'Viewer' && (
                        <Box as="span" mr={1} fontSize="xs">
                          👁️
                        </Box>
                      )}
                      {user.role}
                    </Badge>
                  </Td>
                  <Td px={4} py={3}>
                    <Flex alignItems="center">
                      <Box
                        w={2}
                        h={2}
                        mr={2}
                        borderRadius="full"
                        bg={user.status === 'Active' ? 'green.500' : 'red.500'}
                      />
                      <Text>{user.status}</Text>
                    </Flex>
                  </Td>
                  <Td px={4} py={3}>
                    <HStack spacing={2}>
                      {user.social.includes('facebook') && (
                        <FacebookIcon boxSize={5} color="gray.500" />
                      )}
                      {user.social.includes('github') && (
                        <GithubIcon boxSize={5} color="gray.500" />
                      )}
                      {user.social.includes('twitter') && (
                        <TwitterIcon boxSize={5} color="gray.500" />
                      )}
                      {user.social.includes('google') && (
                        <GoogleIcon boxSize={5} color="gray.500" />
                      )}
                      {user.social.includes('docs') && (
                        <DocsIcon boxSize={5} color="gray.500" />
                      )}
                      {user.plusTwo && (
                        <Badge ml={1} fontSize="xs" colorScheme="gray">
                          +2
                        </Badge>
                      )}
                    </HStack>
                  </Td>
                  <Td px={4} py={3}>
                    <Switch
                      size="md"
                      colorScheme="blue"
                      isChecked={user.promote}
                    />
                  </Td>
                  <Td px={4} py={3}>
                    <Flex alignItems="center">
                      {user.rating.trend === 'up' ? (
                        <TriangleUpIcon color="green.500" mr={1} />
                      ) : (
                        <TriangleDownIcon color="red.500" mr={1} />
                      )}
                      <Text
                        fontWeight="medium"
                        color={
                          user.rating.trend === 'up' ? 'green.500' : 'red.500'
                        }
                      >
                        {user.rating.value}
                      </Text>
                    </Flex>
                  </Td>
                  <Td px={4} py={3}>
                    <Text color={textColor}>{user.lastLogin}</Text>
                  </Td>
                  <Td px={4} py={3}>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        icon={<EllipsisIcon />}
                        variant="ghost"
                        size="sm"
                        aria-label="More options"
                      />
                      <MenuList>
                        <MenuItem>Edit user</MenuItem>
                        <MenuItem>View profile</MenuItem>
                        <MenuItem>Suspend user</MenuItem>
                        <MenuItem color="red.500">Delete user</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Pagination */}
        <Flex
          p={4}
          justify="space-between"
          align="center"
          borderTopWidth="1px"
          borderColor={borderColor}
        >
          <Flex align="center">
            <Text fontSize="sm" color={textColor} mr={2}>
              Rows per page:
            </Text>
            <Select size="sm" width="70px" defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
            <Text fontSize="sm" color={textColor} ml={6}>
              1-10 of 100
            </Text>
          </Flex>
          <HStack>
            <IconButton
              aria-label="Previous page"
              icon={<ChevronLeftIcon />}
              size="sm"
              variant="ghost"
            />
            <Button size="sm" variant="ghost">
              1
            </Button>
            <Button size="sm" colorScheme="blue">
              2
            </Button>
            <Button size="sm" variant="ghost">
              3
            </Button>
            <Text>...</Text>
            <Button size="sm" variant="ghost">
              100
            </Button>
            <IconButton
              aria-label="Next page"
              icon={<ChevronRightIcon />}
              size="sm"
              variant="ghost"
            />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default UserManagementDashboard;
