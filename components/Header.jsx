import {
  Container,
  Button,
  Group,
  Header as HeaderMan,
  Menu,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const Header = () => {
  const links = [
    {
      title: 'Services',
      href: '/',
      links: [
        {
          title: 'Service 1',
          href: '/service1',
        },
        {
          title: 'Service 2',
          href: '/service2',
        },
        {
          title: 'Service 3',
          href: '/service3',
        },
        {
          title: 'Service 4',
          href: '/service4',
        },
      ],
    },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  const renderLink = (link) => {
    if (link.links) {
      return (
        <Menu key={link.title} shadow="md" width={150}>
          <Menu.Target>
            <Button
              rightIcon={<IconChevronDown />}
              variant="subtle"
              color="dark"
              radius="xs"
              size="sm"
            >
              {link.title}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            {link.links.map((subLink) => (
              <Menu.Item key={subLink.title}>{subLink.title}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Button
        key={link.title}
        variant="subtle"
        color="dark"
        radius="xs"
        size="sm"
      >
        {link.title}
      </Button>
    );
  };

  return (
    <HeaderMan height={{ base: 60 }} p="md">
      <Container>
        <Group position="apart">
          <span>Logo</span>
          <Group position="center" spacing="sm">
            {links.map((link) => {
              return renderLink(link);
            })}
          </Group>
        </Group>
      </Container>
    </HeaderMan>
  );
};

export default Header;
