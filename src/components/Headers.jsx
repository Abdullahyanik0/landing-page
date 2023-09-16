/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem, Switch, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun } from "@tabler/icons-react";
import { IconMoonStars } from "@tabler/icons-react";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width:"100%",
    maxWidth:"100%"
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
   
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}));

const links = [
  {
    link: "/about",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "/learn",
    label: "Learn",
  },
  {
    link: "/community",
    label: "Community",
  },
];

const Headers = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT}  className={`${classes.root} w-full flex justify-center items-center sticky top-0 left-0`}>
      <Container className={`${classes.header} w-11/12 sm:w-11/12  md:w-10/12 2xl:w-9/12 max-w-full px-0 mx-0`}>
        <div className="flex items-center text-lg gap-2 ">
          <img className="h-12 w-12" src="/images/logo.png" alt="logo" />
          <p className="font-bold text-orange-600">Ai Parrots</p>{" "}
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
          <Switch
            size="md"
            checked={dark}
            onChange={() => toggleColorScheme()}
            onLabel={<IconSun size="1.3rem" color={theme.white} stroke={1.5} />}
            offLabel={<IconMoonStars size="1.3rem" color={theme.colors.gray[6]} stroke={1.5} />}
          />
        </Group>
          
          <Switch
            size="md"
            className={classes.burger} 
            checked={dark}
            onChange={() => toggleColorScheme()}
            onLabel={<IconSun color={theme.white} stroke={1.5} />}
            offLabel={<IconMoonStars color={theme.colors.gray[6]} stroke={1.5} />}
          />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
    

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Headers;
