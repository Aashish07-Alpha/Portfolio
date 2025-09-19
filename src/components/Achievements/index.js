import React from 'react';
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import { achievements } from '../../data/constants';
import styled from 'styled-components';

// Styled Components similar to Skills section
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AchievementsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const AchievementCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 92, 230, 0.25) 0px 8px 32px;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #854ce6 0%, #d946ef 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const AchievementIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #854ce6 0%, #d946ef 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s ease;
  
  ${AchievementCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const AchievementTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.4;
`;

const AchievementDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const AchievementDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
`;

const Achievements = () => {

  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc>Here are some of my notable achievements and recognitions in various competitions and hackathons.</Desc>
        <AchievementsContainer>
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id}>
              <CategoryBadge>
                {achievement.category}
              </CategoryBadge>
              
              <AchievementIcon>
                <FaTrophy size={24} color="white" />
              </AchievementIcon>
              
              <AchievementTitle>
                {achievement.title}
              </AchievementTitle>
              
              <AchievementDate>
                <FaCalendarAlt size={16} />
                <span>{achievement.date}</span>
              </AchievementDate>
              
              <AchievementDescription>
                {achievement.description}
              </AchievementDescription>
            </AchievementCard>
          ))}
        </AchievementsContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
