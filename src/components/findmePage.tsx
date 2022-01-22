// PACKAGE IMPORTS

import { Grid, Typography, IconButton } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";
// LOCAL IMPORTS
import FooterComp from "./FooterComp";
import FindMePageStyle from "../styles/compStyles/findmePage.style";

import { domains as mydomains } from "../meta/links";

// CONSTANTS

// MAIN

const FindMePage = () => {
    const styles = FindMePageStyle();

    const domains = mydomains(styles);

    return (
        <>
            <Grid
                container
                className={styles.PageCont}
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    container
                    item
                    justifyContent="space-evenly"
                    className={styles.routeCont}
                    xs={10}
                    sm={10}
                    md={8}
                    lg={6}
                    xl={5}
                >
                    {domains.map((domain) => (
                        <IconButton href={domain.href} target="_blank">
                            {domain.icon}
                        </IconButton>
                    ))}
                </Grid>
                <FooterComp footerNavText="/home" footerNavPath="/" />
            </Grid>
        </>
    );
};

export default FindMePage;
