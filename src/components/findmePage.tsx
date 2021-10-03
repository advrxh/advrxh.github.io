// PACKAGE IMPORTS

import { Grid, Typography, IconButton } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
// LOCAL IMPORTS
import FooterComp from './FooterComp';
import FindMePageStyle from '../styles/compStyles/findmePage.style';
// CONSTANTS

// MAIN

const FindMePage = () => {

    const styles = FindMePageStyle();
    const domains = [

        {
            name: 'github',
            icon: <GitHubIcon color="primary" className={styles.icon} />,
            href: 'https://github.com/aadilvarsh'
        },
        {
            name: 'twitter',
            icon: <TwitterIcon color="primary" className={styles.icon} />,
            href: 'https://twitter.com/aadilvarsh'
        },
        {
            name: 'blog',
            icon: <DescriptionIcon color="primary" className={styles.icon} />,
            href: 'https://aadilvarsh.hashnode.dev'
        },
        {
            name: 'mail',
            icon: <EmailIcon color="primary" className={styles.icon} />,
            href: 'mailto:aadilvarshofficial@gmail.com'
        }
    ]

    return (
        <>
            <Grid container className={styles.PageCont} justifyContent="center" alignItems="center">
                <Grid container item justifyContent="space-evenly"
                    className={styles.routeCont}
                    xs={10}
                    sm={10}
                    md={8}
                    lg={6}
                    xl={5}>
                    {domains.map((domain) => (
                        <IconButton
                            href={domain.href}
                            target="_blank"
                        >{domain.icon}</IconButton>
                    ))}
                </Grid>
                <FooterComp footerNavText="/home" footerNavPath="/" />
            </Grid>
        </>
    )
}

export default FindMePage;
