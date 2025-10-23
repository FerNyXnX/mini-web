import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import Card from '../common/Card';
import { TESTIMONIALS } from '../../utils/constants';

const TestimonialsSection = styled.section`
  padding: 80px 0;
  position: relative;
  background: ${props => props.theme.colors.darkSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.textDark};
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const TestimonialText = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  
  &::before {
    content: '"';
    font-size: 3rem;
    color: ${props => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
  
  &::after {
    content: '"';
    font-size: 3rem;
    color: ${props => props.theme.colors.accent};
    margin-left: 0.5rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.hasImage ? 'transparent' : props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.light};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: bold;
  color: ${props => props.theme.colors.light};
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.div`
  color: ${props => props.theme.colors.textDark};
  font-size: 0.9rem;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lo Que Dicen Nuestros Clientes
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          La satisfacción de nuestros clientes es nuestra mejor carta de presentación
        </SectionDescription>
        
        <TestimonialGrid>
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              gradient
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Stars>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </Stars>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar hasImage={testimonial.image}>
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.author} />
                  ) : (
                    testimonial.avatar
                  )}
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>
                    {testimonial.role}, {testimonial.company}
                  </AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </Card>
          ))}
        </TestimonialGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;