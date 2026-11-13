// EDITA AQUÍ LA INFORMACIÓN DE LA EMPRESA.
export const COMPANY = {
  name: 'FRÍO & OBRA', // Nombre de demostración: reemplazar por el real.
  shortName: 'F&O',
  tagline: 'Ingeniería que mantiene tu negocio en marcha.',
  city: 'Mérida, Yucatán',
  whatsapp: '', // Formato: 529991234567 (sin +, guiones ni espacios).
  phone: '',
  email: '',
  address: '',
};
export const whatsappLink = (message) => COMPANY.whatsapp
  ? `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`
  : `mailto:${COMPANY.email || 'contacto@ejemplo.com'}?subject=${encodeURIComponent('Solicitud de cotización')}&body=${encodeURIComponent(message)}`;
