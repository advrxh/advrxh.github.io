import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";

export const domains = (styles) => [
    {
        name: "github",
        icon: <GitHubIcon color="primary" className={styles.icon} />,
        href: "https://github.com/aadilvarsh",
    },
    {
        name: "twitter",
        icon: <TwitterIcon color="primary" className={styles.icon} />,
        href: "https://twitter.com/advrxh",
    },
    {
        name: "blog",
        icon: <DescriptionIcon color="primary" className={styles.icon} />,
        href: "https://aadilvarsh.hashnode.dev",
    },
    {
        name: "mail",
        icon: <EmailIcon color="primary" className={styles.icon} />,
        href: "mailto:aadilvarshofficial@gmail.com",
    },
];
