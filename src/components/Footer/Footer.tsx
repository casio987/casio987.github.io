import React from 'react'
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Gmail } from '../../assets/gmail.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { FooterBar, ImageLink } from "./styles";


const Footer = () => {
    const StyledTooltip = withStyles(() => ({
        tooltip: {
          fontSize: 11,
          fontWeight: 700,
          fontFamily: 'Varela Round',
        },
      }))(Tooltip);

    return (
        <FooterBar>
            <StyledTooltip title='Github' placement='top' arrow>
                <ImageLink href="https://github.com/casio987" target="_blank">
                        <Github className="github"/>
                    </ImageLink>
            </StyledTooltip>
            <StyledTooltip title='LinkedIn' placement='top' arrow>
                <ImageLink href="https://www.linkedin.com/in/sunny-wang-033a19206/" target="_blank">
                    <Linkedin className="linkedin"/>
                </ImageLink>
            </StyledTooltip>
            <StyledTooltip title='Email' placement='top' arrow>
                <ImageLink href="mailto: sunnyw987@gmail.com" target="_blank">
                    <Gmail className="gmail"/>
                </ImageLink>
            </StyledTooltip>
        </FooterBar>
    );
};

export default Footer