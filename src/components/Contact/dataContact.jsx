import { MdOutlineMail, MdShareLocation } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const dataContact = [
    {
      icon: <MdShareLocation  className='fs-1 mainn-color '/>, // يمكن استبداله برمز أو مكون أيقونة من مكتبة أيقونات
      title: 'Address',
      text: 'A108 Adam Street, New York, NY 535022'
    },
    {
      icon: <MdOutlineMail className='fs-1 mainn-color '/>, // أيقونة بريد مثلاً
      title: 'Email',
      text: 'info@example.com'
    },
    {
      icon: <BsTelephone className='fs-1 mainn-color ' />, // أيقونة هاتف
      title: 'Phone',
      text: '+1 234 567 890'
    }
  ];
  
  export default dataContact;
  