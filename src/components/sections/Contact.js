import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateContactForm, resetContactForm } from '../../redux/slices/formSlice';
import Button from '../common/Button';
import Card from '../common/Card';
import { COMPANY_INFO } from '../../utils/constants';

const ContactSection = styled.section`
  padding: 80px 0;
  position: relative;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textDark};
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textDark};
  }
`;

const ContactInfo = styled(motion.div)``;

const InfoCard = styled(Card)`
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.text};
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.accent};
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.light};
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    dispatch(resetContactForm());
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    dispatch(updateContactForm({ [name]: value }));
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctanos
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Listo para llevar tu negocio al siguiente nivel? Hablemos sobre tu proyecto
        </SectionDescription>
        
        <ContactGrid>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label htmlFor="name">Nombre</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Mensaje</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                required
              />
            </FormGroup>
            
            <Button type="submit" variant="primary" size="large">
              Enviar Mensaje <FiArrowRight />
            </Button>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfoCard gradient>
              <InfoTitle>Información de Contacto</InfoTitle>
              <InfoText>
                Estamos aquí para ayudarte a transformar tu visión en realidad. 
                Contáctanos y comencemos a trabajar juntos.
              </InfoText>
              
              <InfoItem style={{ marginBottom: '1rem' }}>
                <FiMail />
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ color: '#a0a0a0' }}>{COMPANY_INFO.email}</div>
                </div>
              </InfoItem>
              
              <InfoItem style={{ marginBottom: '1rem' }}>
                <FiPhone />
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Teléfono</div>
                  <div style={{ color: '#a0a0a0' }}>{COMPANY_INFO.phone}</div>
                </div>
              </InfoItem>
              
              <InfoItem>
                <FiMapPin />
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Ubicación</div>
                  <div style={{ color: '#a0a0a0' }}>{COMPANY_INFO.address}</div>
                </div>
              </InfoItem>
            </InfoCard>
            
            <InfoCard gradient>
              <InfoTitle>Horario de Atención</InfoTitle>
              <InfoText>
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM<br />
                Domingos: Cerrado
              </InfoText>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;