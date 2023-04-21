import { Grid, MantineProvider } from '@mantine/core';

const Footer = () => {
  return (
    <div>
      <Grid>
        <Grid.Col span={3}>
          <div className="column 1" style={{ padding: 30 }}>
            <h2>Contact us</h2>
            <p>
              302, Plot no.705, Rd Number 36, Jubilee Hills, Hyderabad,
              Telangana 500033
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={3} offset={3}>
          <div className="column 2">
            <h4>About</h4>
            <h4>Home</h4>
            <h4>Services</h4>
            <h4>Contact</h4>
            <h4>Careers</h4>
            <h4>Product development</h4>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="column 3">
            <h3> Services</h3>
            <p>UI & UX</p>
            <p>Web & App</p>
            <p>BPA</p>
            <p>RPM</p>
            <p>Monitoring</p>
            <p>Staffing</p>
          </div>
        </Grid.Col>
      </Grid>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
          },
        }}
      ></MantineProvider>
    </div>
  );
};

export default Footer;
