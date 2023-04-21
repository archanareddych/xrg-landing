import { Drawer, Stack, Button, Divider, Paper } from '@mantine/core';
import { Fragment } from 'react';

const NavBar = ({ opened, close, links }) => {
  const renderLink = (link) => {
    if (link.links) {
      return (
        <Paper key={link.title}>
          <Divider label={link.title} labelPosition="center" />
          {link.links.map((subLink) => (
            <Button
              key={subLink.title}
              variant="subtle"
              color="dark"
              radius="xs"
              size="sm"
              compact
            >
              {subLink.title}
            </Button>
          ))}
        </Paper>
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
    <Drawer
      position="right"
      opened={opened}
      onClose={close}
      withCloseButton={false}
    >
      <Stack align="center" spacing="lg">
        {links.map((link) => renderLink(link))}
      </Stack>
    </Drawer>
  );
};

export default NavBar;
