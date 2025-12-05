import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    line-height: 1.6;
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 12px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    padding: 18px 20px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + '20'};
    
    &:hover{
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-3px);
        border-color: ${({ theme }) => theme.primary + '40'};
    }
    
    @media only screen and (max-width: 768px){
        padding: 14px 16px;
        gap: 10px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 14px;
    align-items: flex-start;
`

const Image = styled.img`
    height: 55px;
    width: 55px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-top: 2px;
    object-fit: contain;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.primary + '15'};
    
    @media only screen and (max-width: 768px){
        height: 45px;
        width: 45px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Role = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.3;
    
    @media only screen and (max-width: 768px){
        font-size: 16px;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Company = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const Date = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 'CC'};
    margin-top: 2px;
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 4px;
    align-items: flex-start;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex: 1;
`

const Skill = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + '15'};
    padding: 4px 10px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background: ${({ theme }) => theme.primary + '25'};
    }
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 3px 8px;
    }
`

const SkillsLabel = styled.b`
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
    white-space: nowrap;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
                {experience?.skills &&
                    <>
                        <Skills>
                            <SkillsLabel>Skills:</SkillsLabel>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard