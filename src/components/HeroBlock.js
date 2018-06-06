import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const HeroTitleWrapper = styled.div`
	width: 60%;
	text-align: center;
`
const HeroTitle = styled.div`
	font-size: 4rem;
	font-family: ${props => props.theme.fonts.nettoBold};
	color: ${styledHeaderTheme.colors.blue};
`
const HeroTitleDetails = styled.div`
	padding: 6px 0px 12px 0px;
`

const HeroBlock = props => (
	<HeroTitleWrapper>
		<HeroTitle>IDEAS TO EXECUTION</HeroTitle>
		<HeroTitleDetails>Our experts dig deep into the latest marketing, data, and
			tech trends, providing insights for CIOs, CMOs, marketing directors,
			tech leaders, and more.
		</HeroTitleDetails>
	</HeroTitleWrapper>
)

export default HeroBlock
