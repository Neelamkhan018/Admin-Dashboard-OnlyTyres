import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useNavigate, useParams } from 'react-router-dom';



import url from "../../env.js"


 const AddproductEdit = () => {




// Scroll to top when the component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  
const {id , tyreType} = useParams()
console.log(id , tyreType);

const [title, setTitle] = useState('');
const [type,setType] = useState('')
const [width, setWidth] = useState([]);
const [height, setHeight] = useState([]);
const [customs, setCustoms] = useState([]);
const [seasons, setSeasons] = useState([]);
const [speedRating, setspeedRating] = useState([]);
const [loadCapacity, setloadCapacity] = useState([]);
const [material, setMaterial] = useState([]);
const [image, setImage] = useState([]);
const [price, setPrice] = useState('');
const [Salesprice, setSalesprice] = useState('');
const [description, setDescription] = useState('');
const [fronttyre, setFronttyre] = useState('');
const [reartyre, setRearTyre] = useState('');
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const [manufactureMonth, setManufactureMonth] = useState('');
const [manufactureYear, setManufactureYear] = useState('');
const [description1, setDescription1] = useState('');
const [warranty, setWarranty] = useState('');
const [selectedStates, setSelectedStates] = useState([]);
const [selectedCities, setSelectedCities] = useState([]);
const [quantity, setQuantity] = useState('');
const [tyreBrands, setTyreBrands] = useState([]);
const [selectedTyreBrands, setSelectedTyreBrand] = useState([]);
const [selectedCarModels, setSelectedCarModels] = useState([]);
const [carBrands, setCarBrands] = useState([]);
const [carModels, setCarModels] = useState([]);
const [selectedCarBrands, setSelectedCarBrands] = useState([]); // Supports multiple selections
const [bikeBrands, setBikeBrands] = useState([]);
const [bikeModels, setBikeModels] = useState([]);
const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
const [selectedBikeModels, setSelectedBikeModels] = useState([]);
const [formData , setFormData] = useState([])
const [avatarImages, setAvatarImages] = useState([]);
const [avatarImageUrls, setAvatarImageUrls] = useState([]);
const [thumb1Images, setThumb1Images] = useState([]);
const [thumb1ImageUrls, setThumb1ImageUrls] = useState([]);
const [thumb2Images, setThumb2Images] = useState([]);
const [thumb2ImageUrls, setThumb2ImageUrls] = useState([]);
const [thumb3Images, setThumb3Images] = useState([]);
const [thumb3ImageUrls, setThumb3ImageUrls] = useState([])
const [thumb4Images, setThumb4Images] = useState([]);
const [thumb4ImageUrls, setThumb4ImageUrls] = useState([]);
const [thumb5Images, setThumb5Images] = useState([]);
const [thumb5ImageUrls, setThumb5ImageUrls] = useState([]);
const [thumb6Images, setThumb6Images] = useState([]);
const [thumb6ImageUrls, setThumb6ImageUrls] = useState([]);

const [pinCode, setPinCode] = useState('');
const [details, setDetails] = useState('');
const [slug, setSlug] = useState("");
const [addressCities, setAddressCities] = useState([[]]); // array of city arrays




const [truckBrands, setTruckBrands] = useState([]);
const [selectedTruckBrands, setSelectedTruckBrands] = useState([]);
const [truckModels, setTruckModels] = useState([]);
const [selectedTruckModels, setSelectedTruckModels] = useState([]);


const [tractorBrands, setTractorBrands] = useState([]);
const [selectedTractorBrands, setSelectedTractorBrands] = useState([]);
const [tractorModels, setTractorModels] = useState([]);
const [selectedTractorModels, setSelectedTractorModels] = useState([]);



// Battery
const [batteryType, setBatteryType] = useState('car');


const [batteryBrands, setBatteryBrands] = useState([]);
  const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
  const [batteryModels, setBatteryModels] = useState([]);
  const [selectedBatteryModels, setSelectedBatteryModels] = useState([]);

  const [batteryWeight, setBatteryWeight] = useState('');
    const [batteryHeight, setBatteryHeight] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [voltage, setVoltage] = useState('');

    
 const [Color, setColor] = useState('');
  const [WheelSize, setWheelSize] = useState('');
  const [Holes, setHoles] = useState('');
  const [PCD, setPCD] = useState('');
  const [alloywheelType, setAlloywheelType] = useState('');
  const [selectedAlloywheelBrands, setSelectedAlloywheelBrands] = useState([]);
  const [alloywheelBrands, setAlloywheelBrands] = useState([]);
  const [alloywheelModels, setAlloywheelModels] = useState([]); // Array to hold alloy wheel models
  const [selectedAlloywheelModels, setSelectedAlloywheelModels] = useState([]); // Selected alloy wheel models


  const [accessoryType, setAccessoryType] = useState('');
  const [accessoryBrands, setAccessoryBrands] = useState([]);
  const [selectedAccessoryBrands, setSelectedAccessoryBrands] = useState([]);
  const [accessoryModels, setAccessoryModels] = useState([]);
  const [selectedAccessoryModels, setSelectedAccessoryModels] = useState([]);



const navigate = useNavigate()

  const [addresses, setAddresses] = useState([
    { state: '', city: '', pinCode: '', details: '' }
  ]);

  const addAddress = () => {
    setAddresses([...addresses, { state: '', city: '', pinCode: '', details: '' }]);
  };

  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  const handleStateChange = (index, state) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].state = state;
    updatedAddresses[index].city = ''; // Reset city
  
    const updatedCities = [...addressCities];
    updatedCities[index] = stateCityData[state] || [];
  
    setAddresses(updatedAddresses);
    setAddressCities(updatedCities);
  };
  


  const handleCityChange = (index, city) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].city = city;
    setAddresses(updatedAddresses);
  };

  const handleInputChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  
  // List of months and years
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearOptions = Array.from({ length: 20 }, (v, k) => (new Date().getFullYear() - k).toString());

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': [] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  // Define the formats to be used in the editor
  const formats = [
    'header', 'font', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'align', 'bold', 'italic', 'underline', 'link', 'image'
  ];
  
  
  const handleEditorChange = (content) => {
    setDescription1(content);
  };


  // Object holding states and their respective cities
  const stateCityData = {
    AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Anantapur'],
    ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Bomdila', 'Tezu', 'Changlang'],
    Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
    Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai'],
    Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
    Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
    Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Sonipat', 'Rohtak'],
    HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Bilaspur', 'Chamba'],
    Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
    Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Gulbarga', 'Shimoga'],
    Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha'],
    MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur', 'Solapur'],
    Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Kakching'],
    Meghalaya: ['Shillong', 'Tura', 'Nongpoh', 'Cherrapunji', 'Nongstoin', 'Baghmara', 'Jowai', 'Mawkyrwat'],
    Mizoram: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Saiha', 'Kolasib', 'Lawngtlai', 'Mamit'],
    Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto', 'Phek'],
    Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada'],
    Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
    Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
    Sikkim: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla', 'Mangan', 'Yuksom', 'Jorethang'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
    Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Suryapet'],
    Tripura: ['Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Ambassa', 'Belonia', 'Khowai', 'Teliamura'],
    UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Bareilly'],
    Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee', 'Rudrapur', 'Kashipur'],
    WestBengal: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur', 'Malda']
  };
  





// useEffect(() => {
//   const fetchTyreData = async () => {
//     try {
//       const response = await fetch(`${url.nodeapipath}/get-tyre/${id}/${tyreType}`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch tyre data');
//       }

//       const data = await response.json(); // Directly parse as JSON

//       // Populate the state with fetched data
//       setTitle(data.title || '');
//       setSlug(data.slug || '');
//       setWidth(data.width || []);
//       setHeight(data.height || []);
//       setCustoms(data.customs || []);
//       const seasonsArray = Array.isArray(data.seasons) ? data.seasons : [data.seasons];
//       setSeasons(seasonsArray);
//       setspeedRating(data.speedRating || []);
//       setloadCapacity(data.loadCapacity || []);
//       setMaterial(data.material || []);
//       setImage(data.image || []);
//       setPrice(data.price || '');
//       setSalesprice(data.Salesprice || '');
//       setDescription(data.description || '');
//       setFronttyre(data.frontTyre || '');
//       setRearTyre(data.rearTyre || '');
//       setManufactureMonth(data.manufactureMonth || '');
//       setManufactureYear(data.manufactureYear || '');
//       setWarranty(data.warranty || '');
//       setQuantity(data.quantity || '');
      
//       setDescription1(data.description1 || '');

//       setColor(data.Color || ''); // Set previous Color
//       setWheelSize(data.WheelSize || ''); // Set previous WheelSize
//       setHoles(data.Holes || ''); // Set previous Holes
//       setPCD(data.PCD || ''); // Set previous PCD
  

//       // For Car Tyres
//       setSelectedCarBrands(
//         Array.isArray(data.carbrand) 
//           ? data.carbrand.map(item => ({ value: item, label: item })) 
//           : []
//       );

//       setSelectedCarModels(
//         Array.isArray(data.carModel) 
//           ? data.carModel.map(item => ({ value: item, label: item })) 
//           : []
//       );


  

//       // For Bike Tyres
//       setSelectedBikeBrands(
//         Array.isArray(data.bikeBrand) 
//           ? data.bikeBrand.map(item => ({ value: item, label: item })) 
//           : []
//       );

//       setSelectedBikeModels(
//         Array.isArray(data.bikeModel) 
//           ? data.bikeModel.map(item => ({ value: item, label: item })) 
//           : []
//       );

//       // For Tyre Brand (both types)
//       setSelectedTyreBrand(
//         Array.isArray(data.tyreBrand) 
//           ? data.tyreBrand.map(item => ({ value: item, label: item })) 
//           : []
//       );

//       // For Truck Tyres
//       if (tyreType === 'truck') {
//         setSelectedTruckBrands(
//           Array.isArray(data.truckBrand) 
//             ? data.truckBrand.map(item => ({ value: item, label: item })) 
//             : []
//         );

//         setSelectedTruckModels(
//           Array.isArray(data.truckModel) 
//             ? data.truckModel.map(item => ({ value: item, label: item })) 
//             : []
//         );
//       }

//       // For Tractor Tyres
//       if (tyreType === 'tractor') {
//         setSelectedTractorBrands(
//           Array.isArray(data.tractorBrand) 
//             ? data.tractorBrand.map(item => ({ value: item, label: item })) 
//             : []
//         );

//         setSelectedTractorModels(
//           Array.isArray(data.tractorModel) 
//             ? data.tractorModel.map(item => ({ value: item, label: item })) 
//             : []
//         );
//       }


//       if (tyreType === 'battery') {

//         setBatteryType(data.batteryType || '');

//         setSelectedBatteryBrands(
//           Array.isArray(data.BatteryBrand) 
//             ? data.BatteryBrand.map(item => ({ value: item, label: item })) 
//             : []
//         );

//         setSelectedBatteryModels(
//           Array.isArray(data.BatteryModel) 
//             ? data.BatteryModel.map(item => ({ value: item, label: item })) 
//             : []
//         );
//         setBatteryCapacity(data.capacity || '');
//         setVoltage(data.voltage || '');
//         setBatteryWeight(data.batteryweight || '');
//         setBatteryHeight(data.batteryheight || '');
//       }

      

//       // For Alloy Wheel
//       if (tyreType === 'alloywheel') {
//         setAlloywheelType(data.alloywheelType || '');

//         setSelectedAlloywheelBrands(
//           Array.isArray(data.alloywheelBrand) 
//             ? data.alloywheelBrand.map(item => ({ value: item, label: item })) 
//             : []
//         );

//         setSelectedAlloywheelModels(
//           Array.isArray(data.alloywheelModel) 
//             ? data.alloywheelModel.map(item => ({ value: item, label: item })) 
//             : []
//         );
        
//         // Set previous data for alloy wheels
//       setColor(data.Color || ''); // Set previous Color
//       setWheelSize(data.WheelSize || ''); // Set previous WheelSize
//       setHoles(data.Holes || ''); // Set previous Holes
//       setPCD(data.PCD || ''); // Set previous PCD
//       setAlloywheelType(data.alloywheelType || ''); // Set previous alloywheelType
//       }

//       // For Accessories
//       if (tyreType === 'accessories') {
       
//         setAccessoryType(data.accessoryType || '');


//         setSelectedAccessoryBrands(
//           Array.isArray(data.accessoryBrand) 
//             ? data.accessoryBrand.map(item => ({ value: item, label: item })) 
//             : []
//         );

//         setSelectedAccessoryModels(
//           Array.isArray(data.accessoryModel) 
//             ? data.accessoryModel.map(item => ({ value: item, label: item })) 
//             : []
//         );

//       }
  

// // Handle Avatar Images
// if (Array.isArray(data.avatarImages)) {
//   setAvatarImages(
//     data.avatarImages.map((img) => `https://tyres.blr1.digitaloceanspaces.com/${img}`)
//   );
// } else if (data.avatarImages) {
//   setAvatarImages([`https://tyres.blr1.digitaloceanspaces.com/${data.avatarImages}`]);
// } else {
//   setAvatarImages([]); // Ensure it's always an array
// }

// // Handle Thumbnail Images (1 to 6)
// const thumbImages = [1, 2, 3, 4, 5, 6].map(num => {
//   const thumbKey = `thumb${num}Images`;
//   if (Array.isArray(data[thumbKey])) {
//     return data[thumbKey].map((img) => `https://tyres.blr1.digitaloceanspaces.com/${img}`);
//   } else if (data[thumbKey]) {
//     return [`https://tyres.blr1.digitaloceanspaces.com/${data[thumbKey]}`];
//   }
//   return [];
// });



//         setThumb1Images(thumbImages[0]);
//         setThumb2Images(thumbImages[1]);
//         setThumb3Images(thumbImages[2]);
//         setThumb4Images(thumbImages[3]);
//         setThumb5Images(thumbImages[4]);
//         setThumb6Images(thumbImages[5]);
  
//         // // Populate addresses from the fetched data.
//         // setAddresses(data.addresses || []);

//         if (Array.isArray(data.addresses)) {
//           setAddresses(data.addresses);
        
//           const loadedCities = data.addresses.map(addr => stateCityData[addr.state] || []);
//           setAddressCities(loadedCities);
//         }     
  
//       } catch (error) {
//         setError('Error fetching tyre data');
//         console.error(error);
//       }
//     };
  
//     fetchTyreData();
//   }, [id, tyreType]);
  


useEffect(() => {
  const fetchTyreData = async () => {
    try {
      const response = await fetch(`${url.nodeapipath}/get-tyre/${id}/${tyreType}`);

      if (!response.ok) {
        throw new Error('Failed to fetch tyre data');
      }

      const data = await response.json();

      // Populate state with fetched data
      setTitle(data.title || '');
      setSlug(data.slug || '');
      setWidth(data.width || []);
      setHeight(data.height || []);
      setCustoms(data.customs || []);
      setSeasons(Array.isArray(data.seasons) ? data.seasons : [data.seasons]);
      setspeedRating(data.speedRating || []);
      setloadCapacity(data.loadCapacity || []);
      setMaterial(data.material || []);
      setImage(data.image || []);
      setPrice(data.price || '');
      setSalesprice(data.Salesprice || '');
      setDescription(data.description || '');
      setFronttyre(data.frontTyre || '');
      setRearTyre(data.rearTyre || '');
      setManufactureMonth(data.manufactureMonth || '');
      setManufactureYear(data.manufactureYear || '');
      setWarranty(data.warranty || '');
      setQuantity(data.quantity || '');
      setDescription1(data.description1 || '');
      setColor(data.Color || '');
      setWheelSize(data.WheelSize || '');
      setHoles(data.Holes || '');
      setPCD(data.PCD || '');

      // Handle dynamic brands and models based on tyreType
      const mapBrandsAndModels = (brandKey, modelKey) => {
        return {
          brands: Array.isArray(data[brandKey]) ? data[brandKey].map(item => ({ value: item, label: item })) : [],
          models: Array.isArray(data[modelKey]) ? data[modelKey].map(item => ({ value: item, label: item })) : []
        };
      };

      // Car and Bike Tyres
      const { brands: carBrands, models: carModels } = mapBrandsAndModels('carbrand', 'carModel');
      const { brands: bikeBrands, models: bikeModels } = mapBrandsAndModels('bikeBrand', 'bikeModel');
      setSelectedCarBrands(carBrands);
      setSelectedCarModels(carModels);
      setSelectedBikeBrands(bikeBrands);
      setSelectedBikeModels(bikeModels);

      // For Truck Tyres
      if (tyreType === 'truck') {
        const { brands: truckBrands, models: truckModels } = mapBrandsAndModels('truckBrand', 'truckModel');
        setSelectedTruckBrands(truckBrands);
        setSelectedTruckModels(truckModels);
      }

      // For Tractor Tyres
      if (tyreType === 'tractor') {
        const { brands: tractorBrands, models: tractorModels } = mapBrandsAndModels('tractorBrand', 'tractorModel');
        setSelectedTractorBrands(tractorBrands);
        setSelectedTractorModels(tractorModels);
      }

      // For Battery Tyres
      if (tyreType === 'battery') {
        setBatteryType(data.batteryType || '');
        const { brands: batteryBrands, models: batteryModels } = mapBrandsAndModels('BatteryBrand', 'BatteryModel');
        setSelectedBatteryBrands(batteryBrands);
        setSelectedBatteryModels(batteryModels);
        setBatteryCapacity(data.capacity || '');
        setVoltage(data.voltage || '');
        setBatteryWeight(data.batteryweight || '');
        setBatteryHeight(data.batteryheight || '');
      }

      // For Alloy Wheel
      if (tyreType === 'alloywheel') {
        setAlloywheelType(data.alloywheelType || '');
        const { brands: alloyBrands, models: alloyModels } = mapBrandsAndModels('alloywheelBrand', 'alloywheelModel');
        setSelectedAlloywheelBrands(alloyBrands);
        setSelectedAlloywheelModels(alloyModels);
      }

      // For Accessories
      if (tyreType === 'accessories') {
        setAccessoryType(data.accessoryType || '');
        const { brands: accessoryBrands, models: accessoryModels } = mapBrandsAndModels('accessoryBrand', 'accessoryModel');
        setSelectedAccessoryBrands(accessoryBrands);
        setSelectedAccessoryModels(accessoryModels);
      }

      // Handle Avatar Images
      if (Array.isArray(data.avatarImages)) {
        setAvatarImages(data.avatarImages.map(img => `https://tyres.blr1.digitaloceanspaces.com/${img}`));
      } else if (data.avatarImages) {
        setAvatarImages([`https://tyres.blr1.digitaloceanspaces.com/${data.avatarImages}`]);
      } else {
        setAvatarImages([]);
      }

      // Handle Thumbnail Images (1 to 6)
      const thumbImages = [1, 2, 3, 4, 5, 6].map(num => {
        const thumbKey = `thumb${num}Images`;
        if (Array.isArray(data[thumbKey])) {
          return data[thumbKey].map(img => `https://tyres.blr1.digitaloceanspaces.com/${img}`);
        } else if (data[thumbKey]) {
          return [`https://tyres.blr1.digitaloceanspaces.com/${data[thumbKey]}`];
        }
        return [];
      });

      setThumb1Images(thumbImages[0]);
      setThumb2Images(thumbImages[1]);
      setThumb3Images(thumbImages[2]);
      setThumb4Images(thumbImages[3]);
      setThumb5Images(thumbImages[4]);
      setThumb6Images(thumbImages[5]);

      // Handle addresses
      if (Array.isArray(data.addresses)) {
        setAddresses(data.addresses);
        const loadedCities = data.addresses.map(addr => stateCityData[addr.state] || []);
        setAddressCities(loadedCities);
      }

    } catch (error) {
      setError('Error fetching tyre data');
      console.error(error);
    }
  };

  fetchTyreData();
}, [id, tyreType]);



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    // Append text fields
    formData.append('title', title);
     // Append slug
  formData.append('slug', slug); // Add slug to the formData
    formData.append('tyreType', tyreType);
    formData.append('carbrand', selectedCarBrands.map(option => option.value).join(','));
    formData.append('carModel', selectedCarModels.map(option => option.value).join(','));
    formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(','));
    formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(','));
    formData.append('tyreBrand', selectedTyreBrands.map(option => option.value).join(','));
    formData.append('width', width);
    formData.append('height', height);
    formData.append('customs', Array.isArray(customs) ? customs.join(',') : customs);
    // formData.append('seasons', seasons.map(option => option.value).join(','));

    formData.append('seasons', Array.isArray(seasons) ? seasons.join(',') : '');
    formData.append('speedRating', speedRating);
    formData.append('loadCapacity', loadCapacity);
    formData.append('fronttyre', fronttyre);
    formData.append('reartyre', reartyre);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('Salesprice', Salesprice);
    formData.append('description', description);
    formData.append('description1', description1);
    formData.append('manufactureMonth', manufactureMonth);
    formData.append('manufactureYear', manufactureYear);
    formData.append('material', material);
    formData.append('state', selectedStates);
    formData.append('city', selectedCities);
    formData.append('pinCode', pinCode);
    formData.append('details', details);
    formData.append('addresses', JSON.stringify(addresses));
  


    formData.append('truckBrand', selectedTruckBrands.map(option => option.value).join(','));
    formData.append('truckModel', selectedTruckModels.map(option => option.value).join(','));

    formData.append('tractorBrand', selectedTractorBrands.map(option => option.value).join(','));
formData.append('tractorModel', selectedTractorModels.map(option => option.value).join(','));






if (tyreType === 'battery') {
  formData.append('batteryType', batteryType);
  formData.append('BatteryBrand', selectedBatteryBrands.map(option => option.value).join(','));
  formData.append('BatteryModel', selectedBatteryModels.map(option => option.value).join(','));
  formData.append('batteryweight', batteryWeight);
  formData.append('batteryheight', batteryHeight);
  formData.append('capacity', batteryCapacity);
  formData.append('voltage', voltage);
}
if (tyreType === 'alloywheel') {
  formData.append('alloywheelType', alloywheelType);
  formData.append('alloywheelBrand', selectedAlloywheelBrands.map(option => option.value).join(','));
  formData.append('alloywheelModel', selectedAlloywheelModels.map(option => option.value).join(','));
}
if (tyreType === 'accessories') {
  formData.append('accessoryType', accessoryType);
  formData.append('accessoryBrand', selectedAccessoryBrands.map(option => option.value).join(','));
  formData.append('accessoryModel', selectedAccessoryModels.map(option => option.value).join(','));
}






    // Append image files (check if they are arrays)
    if (Array.isArray(avatarImages)) {
      avatarImages.forEach(file => formData.append('avatar', file));
    }
  
    if (Array.isArray(thumb1Images)) {
      thumb1Images.forEach(file => formData.append('thumb1', file));
    } else if (thumb1Images) {
      formData.append('thumb1', thumb1Images);
    }
  
    if (Array.isArray(thumb2Images)) {
      thumb2Images.forEach(file => formData.append('thumb2', file));
    }
  
    if (Array.isArray(thumb3Images)) {
      thumb3Images.forEach(file => formData.append('thumb3', file));
    }
  
    if (Array.isArray(thumb4Images)) {
      thumb4Images.forEach(file => formData.append('thumb4', file));
    }
  
    if (Array.isArray(thumb5Images)) {
      thumb5Images.forEach(file => formData.append('thumb5', file));
    }
  
    if (Array.isArray(thumb6Images)) {
      thumb6Images.forEach(file => formData.append('thumb6', file));
    }
  
    try {
      const response = await fetch(`${url.nodeapipath}/update-tyres/${id}/${tyreType}`, {
        method: 'PUT',
        body: formData, 
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update tyre: ${errorText}`);
      }
  
      const responseData = await response.json();
      console.log('Update successful:', responseData);
      navigate('/list');
    } catch (error) {
      console.error('Error updating tyre:', error);
      setError('Failed to update tyre');
    }
  };






  const handleImageChange = (event, thumbId) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const imageUrls = files.map((file) => URL.createObjectURL(file));
  
      switch (thumbId) {
        case 'avatar':
          setAvatarImages(files); // For avatar image
          setAvatarImageUrls(imageUrls); // For avatar preview
          break;
        case 'thumb1':
          setThumb1Images(files);
          setThumb1ImageUrls(imageUrls);
          break;
        case 'thumb2':
          setThumb2Images(files);
          setThumb2ImageUrls(imageUrls);
          break;
        case 'thumb3':
          setThumb3Images(files);
          setThumb3ImageUrls(imageUrls);
          break;
        case 'thumb4':
          setThumb4Images(files);
          setThumb4ImageUrls(imageUrls);
          break;
        case 'thumb5':
          setThumb5Images(files);
          setThumb5ImageUrls(imageUrls);
          break;
        case 'thumb6':
          setThumb6Images(files);
          setThumb6ImageUrls(imageUrls);
          break;
        default:
          break;
      }
    }
  };

  

//car
  const widthOptions = [31,33,35,37,115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
  const heightOptions = [35,40,45,50,55,60,65,70,75,80];
  const  customsOptions= [15,16,17,19];

//bike
  const widthOptions1 = [ 5.00, 5.50, 6.00, 6.50, 7.50,
  8, 8.3, 9.5, 11.2, 12.4, 13.6, 14.9, 15.9, 16.9, 18.4, 7.50, 8.25, 9.00, 10.00, 10.50, 11.00, 11.25, 11.75, 12.00, 12.5 , 2.50 ,2.75,3.00,3.25,3.50,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,240,260];
  const heightOptions1 = [ 12, 15, 18, 28, 30, 34, 38,16, 20, 22.5, 24, 25,60,65,70,75,80,90,100,600,605];
  // const customsOptions1 = [10,11,12,13,14,15,16,17,18,19,21,23];
  const customsOptions1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];





 
  const SpeedRating1 = [
  'N: up to 140 km/h',
  'P: up to 150 km/h',
  'Q: up to 160 km/h',
  'R: up to 170 km/h',
  'S: up to 180 km/h',
  'T: up to 190 km/h',
  'U: up to 200 km/h',
  'H: up to 210 km/h',
  'V: up to 240 km/h',
  'Z: up to 240+ km/h',
  'W: up to 270 km/h',
  'Y: up to 300 km/h'
];

  const LoadCapacity1 = [47, 52, 54, 58, 62, 65, 69, 73, 82, 85, 88, 91, 94, 95, 98, 99, 100, 104, 108] 
  const Quantity = [1,2,3,4,5,6,7,8,9,10];
  const Material = ["Steel","Nylon"];
  const warrantyOptions = ['1 year','2 years','3 years','4 years','5 years','6 years','7 years','8 years','9 years','10 years',
  ];




  // Example options — you can modify these based on your data
const batteryWeightOptions = [ '1kg', '2kg', '3kg', '4kg', '5kg', 
  '6kg', '7kg', '8kg', '9kg', '10kg', 
  '12kg', '14kg', '16kg', '18kg', '20kg', 
  '22kg', '24kg', '26kg', '28kg', '30kg', 
  '35kg', '40kg', '45kg', '50kg', '55kg', 
  '60kg', '65kg', '70kg', '75kg', '80kg', 
  '85kg', '90kg', '95kg', '100kg'];

const batteryHeightOptions = ['50mm', '60mm', '70mm', '80mm', '90mm', 
  '100mm', '110mm', '120mm', '130mm', '140mm', 
  '150mm', '160mm', '170mm', '180mm', '190mm', 
  '200mm', '210mm', '220mm', '230mm', '240mm'];

const voltageOptions = ['6V', '12V',  '24V',  '36V',  '48V','60V',  '72V', 
   '100V', '300V','400V', '800V' ];
   
const batteryCapacityOptions = [
  '1Ah', '2Ah', '3Ah', '4Ah', '5Ah', '6Ah', '7Ah', '8Ah', '9Ah', '10Ah',
  '11Ah', '12Ah', '13Ah', '14Ah', '15Ah', '16Ah', '17Ah', '18Ah', '19Ah', '20Ah',
  '21Ah', '22Ah', '23Ah', '24Ah', '25Ah', '26Ah', '27Ah', '28Ah', '29Ah', '30Ah',
  '31Ah', '32Ah', '33Ah', '34Ah', '35Ah', '36Ah', '37Ah', '38Ah', '39Ah', '40Ah',
  '41Ah', '42Ah', '43Ah', '44Ah', '45Ah', '46Ah', '47Ah', '48Ah', '49Ah', '50Ah',
  '51Ah', '52Ah', '53Ah', '54Ah', '55Ah', '56Ah', '57Ah', '58Ah', '59Ah', '60Ah',
  '61Ah', '62Ah', '63Ah', '64Ah', '65Ah', '66Ah', '67Ah', '68Ah', '69Ah', '70Ah',
  '71Ah', '72Ah', '73Ah', '74Ah', '75Ah', '76Ah', '77Ah', '78Ah', '79Ah', '80Ah',
  '81Ah', '82Ah', '83Ah', '84Ah', '85Ah', '86Ah', '87Ah', '88Ah', '89Ah', '90Ah',
  '91Ah', '92Ah', '93Ah', '94Ah', '95Ah', '96Ah', '97Ah', '98Ah', '99Ah', '100Ah'
];





//Alloy Wheels 
const colorOptions = [
  'Silver', 'Black', 'Gun Metal', 'Matt Black', 'Black + Red', 
  'Matt Anthracite', 'Glossy Anthracite', 'FMBK', 'Black Milling', 
  'Black Machined', 'Black UCM (1 item)', 'Glossy Black', 
  'Silver Machined', 'Candy Black Machined', 'Matt Bronze (1 item)', 
  'EP Clear Sheen Silver', 'C Clear Starlight Bla', 'FP Clear Neon', 
  'FP Lustrous Bronze'
];
const wheelSizeOptions = ['14 inches','15 inches', '16 inches', '17 inches', '18 inches', '19 inches'];
const holesOptions = ['4 Holes', '5 Holes', '6 Holes' , '7 Holes' ,'8 Holes'];
const pcdOptions = ['100mm', '110mm', '120mm', '130mm'];




 


//------------------------Fetch tractor brand and model-----------------------

// Fetch tractor brands
useEffect(() => {
  const fetchTractorBrands = async () => {
    try {
      const response = await fetch(`${url.nodeapipath}/get-Tractorbrand`);
      const data = await response.json();
      const activeBrands = data.filter(brand => brand.active);
      setTractorBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching tractor brands:', error);
    }
  };

  fetchTractorBrands();
}, []);

// Fetch tractor models based on selected tractor brands
useEffect(() => {
  const fetchTractorModels = async () => {
    if (selectedTractorBrands.length > 0) {
      try {
        const selectedBrandIds = selectedTractorBrands.map(option => option.value);
        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');

        const response = await fetch(`${url.nodeapipath}/get-Tractormodel?${query}`);
        const data = await response.json();
        const activeModels = data.filter(model => model.active);

        setTractorModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching tractor models:', error);
      }
    } else {
      setTractorModels([]);
    }
  };

  fetchTractorModels();
}, [selectedTractorBrands]);


  //------------------------ Fetch truck brands--------------------------
useEffect(() => {
  const fetchTruckBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-truckbrand`);
      const activeTruckBrands = response.data.filter(brand => brand.active);
      setTruckBrands(activeTruckBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching truck brands:', error);
    }
  };

  fetchTruckBrands();
}, []);

// Fetch truck models based on selected truck brands
useEffect(() => {
  const fetchTruckModels = async () => {
    if (selectedTruckBrands.length > 0) {
      try {
        const selectedBrandIds = selectedTruckBrands.map(option => option.value);
        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');

        const response = await axios.get(`${url.nodeapipath}/get-truckmodel?${query}`);
        const activeModels = response.data.filter(model => model.active);

        setTruckModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching truck models:', error);
      }
    } else {
      setTruckModels([]);
    }
  };

  fetchTruckModels();
}, [selectedTruckBrands]);

// ---------------------------------Tyre Brand Section -----------------------------------


    // Handle tyre brand selection
    useEffect(() => {
      const fetchTyreBrands = async () => {
        try {
          const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setTyreBrands(data);
        } catch (error) {
          console.error('Failed to load tyre brands:', error);
        }
      };
  
      fetchTyreBrands();
    }, []);
  
    // const activeTyreBrands = tyreBrands.filter(brand => brand.active);
    const activeTyreBrands = tyreBrands.filter(
  brand => brand.active && brand.category === tyreType
);

  
    // Handle form input changes
    
  
  
    const handleSelectChange = (selectedOptions) => {
      const selectedValues = selectedOptions.map(option => option.value); // Keep as IDs
      setSelectedTyreBrand(selectedOptions);
      setFormData({
        ...formData,
        tyreBrand: selectedValues
      });
    };
  
  


//  ------------------------------ Car Brand / car Model ------------------------


useEffect(() => {
  const fetchCarBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-carbrand`);
      const activeCarBrands = response.data.filter(brand => brand.active);
      setCarBrands(activeCarBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching car brands:', error);
    }
  };

  fetchCarBrands();
}, []);

// Fetch car models based on selected car brands


useEffect(() => {
  const fetchCarModels = async () => {
    if (selectedCarBrands.length > 0) {
      try {
        const selectedBrandIds = selectedCarBrands
          .map(option => option.value)
          .filter(id => id); // Ensures no undefined or empty ids are included
        
        if (selectedBrandIds.length === 0) {
          console.error('No valid brand IDs selected.');
          return;
        }

        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
        console.log('Fetching models for brand IDs:', selectedBrandIds); // Debugging log

        const response = await axios.get(`${url.nodeapipath}/get-carmodel?${query}`);
        const activeModels = response.data.filter(model => model.active);

        console.log('Fetched car models:', activeModels); // Debugging log
        setCarModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching car models:', error);
      }
    } else {
      setCarModels([]);
    }
  };

  fetchCarModels();
}, [selectedCarBrands]);



// Handle car brand selection change
const handleCarBrandsChange = (selectedOptions) => {
  console.log('Selected car brands:', selectedOptions); // Debugging log
  setSelectedCarBrands(selectedOptions || []);
};

// Handle car model selection change
const handleCarModelsChange = (selectedOptions) => {
  setSelectedCarModels(selectedOptions || []);
};


// // -------------------------- Bike Brand / Model--------------------

  useEffect(() => {
    const fetchBikeBrands = async () => {
      try {
        const response = await axios.get(`${url.nodeapipath}/get-bikebrand`);
        const activeBikeBrands = response.data.filter(brand => brand.active);
        setBikeBrands(activeBikeBrands.map(brand => ({ label: brand.name, value: brand._id })));
      } catch (error) {
        console.error('Error fetching bike brands:', error);
      }
    };

    fetchBikeBrands();
  }, []);

  // Fetch bike models based on selected bike brands
  useEffect(() => {
    const fetchBikeModels = async () => {
      if (selectedBikeBrands.length > 0) {
        try {
          const selectedBrandIds = selectedBikeBrands.map(option => option.value);
          const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');

          const response = await axios.get(`${url.nodeapipath}/get-bikemodel?${query}`);
          const activeModels = response.data.filter(model => model.active);

          setBikeModels(activeModels.map(model => ({
            value: model._id,
            label: model.name,
          })));
        } catch (error) {
          console.error('Error fetching bike models:', error);
        }
      } else {
        setBikeModels([]);
      }
    };

    fetchBikeModels();
  }, [selectedBikeBrands]);




  // Handle bike brand selection change
  const handleBikeBrandsChange = (selectedOptions) => {
    setSelectedBikeBrands(selectedOptions);
  };

  // Handle bike model selection change
  const handleBikeModelsChange = (selectedOptions) => {
    setSelectedBikeModels(selectedOptions);
  };

  


//----------------------battery brand and model --------------------------


// Fetch Battery Brands
useEffect(() => {
  const fetchBatteryBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-Batterybrand`);
      const activeBrands = response.data.filter(brand => brand.active);
      setBatteryBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching battery brands:', error);
    }
  };

  fetchBatteryBrands();
}, []);

// Fetch Battery Models based on selected Battery Brands
useEffect(() => {
  const fetchBatteryModels = async () => {
    if (selectedBatteryBrands.length > 0) {
      try {
        const selectedBrandIds = selectedBatteryBrands.map(option => option.value);
        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
        const response = await axios.get(`${url.nodeapipath}/get-Batterymodel?${query}`);
        const activeModels = response.data.filter(model => model.active);
        setBatteryModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching battery models:', error);
      }
    } else {
      setBatteryModels([]);
    }
  };

  fetchBatteryModels();
}, [selectedBatteryBrands]);

// Handle Battery Brand Selection
const handleBatteryBrandsChange = (selectedOptions) => {
  setSelectedBatteryBrands(selectedOptions);
};

// Handle Battery Model Selection
const handleBatteryModelsChange = (selectedOptions) => {
  setSelectedBatteryModels(selectedOptions);
};






  //-------------------------alloy wheel brand and model ------------------------

  useEffect(() => {
    const fetchAlloywheelBrands = async () => {
      try {
        const response = await axios.get(`${url.nodeapipath}/get-alloybrand`);
        const activeBrands = response.data.filter(brand => brand.active);
        setAlloywheelBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
      } catch (error) {
        console.error('Error fetching alloy wheel brands:', error);
      }
    };

    fetchAlloywheelBrands();
  }, []);

  // Fetch Alloy Wheel Models based on selected Alloy Wheel Brands
  useEffect(() => {
    const fetchAlloywheelModels = async () => {
      if (selectedAlloywheelBrands.length > 0) {
        try {
          const selectedBrandIds = selectedAlloywheelBrands.map(option => option.value);
          const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
          const response = await axios.get(`${url.nodeapipath}/get-AlloyWheelmodel?${query}`);
          const activeModels = response.data.filter(model => model.active);
          setAlloywheelModels(activeModels.map(model => ({
            value: model._id,
            label: model.name,
          })));
        } catch (error) {
          console.error('Error fetching alloy wheel models:', error);
        }
      } else {
        setAlloywheelModels([]);
      }
    };

    fetchAlloywheelModels();
  }, [selectedAlloywheelBrands]);

  // Handle Alloy Wheel Brand Selection
  const handleAlloywheelBrandsChange = (selectedOptions) => {
    setSelectedAlloywheelBrands(selectedOptions);
  };

  // Handle Alloy Wheel Model Selection
  const handleAlloywheelModelsChange = (selectedOptions) => {
    setSelectedAlloywheelModels(selectedOptions);
  };





//-------------------------Accessories brand and model -------------------------

// Fetch accessory brands
useEffect(() => {
  const fetchAccessoryBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-accessoriesbrand`);
      const activeBrands = response.data.filter(brand => brand.active);
      setAccessoryBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching accessory brands:', error);
    }
  };

  fetchAccessoryBrands();
}, []);

// Fetch accessory models based on selected accessory brands
useEffect(() => {
  const fetchAccessoryModels = async () => {
    if (selectedAccessoryBrands.length > 0) {
      try {
        const selectedBrandIds = selectedAccessoryBrands.map(option => option.value);
        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
        const response = await axios.get(`${url.nodeapipath}/get-accessoriesmodel?${query}`);
        const activeModels = response.data.filter(model => model.active);
        setAccessoryModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching accessory models:', error);
      }
    } else {
      setAccessoryModels([]);
    }
  };

  fetchAccessoryModels();
}, [selectedAccessoryBrands]);

// Handle accessory brand selection
const handleAccessoryBrandsChange = (selectedOptions) => {
  setSelectedAccessoryBrands(selectedOptions);
};

// Handle accessory model selection
const handleAccessoryModelsChange = (selectedOptions) => {
  setSelectedAccessoryModels(selectedOptions);
};








// Function to generate slug
const generateSlug = (text) => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens
};


// Handle input change
const handleInputslug = (e) => {
  const inputValue = e.target.value;
  const slugifiedValue = generateSlug(inputValue);
  setSlug(slugifiedValue); // Update the slug
};


return (
    
<body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">

<div className="wrapper">

  <Sidebar/>

  <div className="ec-page-wrapper">

 <Navbar/>

  
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h1>Update Product</h1>
            <p className="breadcrumbs"><span><a href="#">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>Product</p>
          </div>
          <div>
            <a href="/list" className="btn btn-primary"> View All
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header card-header-border-bottom">
                <h2>Update Product</h2>
              </div>

              <div className="card-body">
                <div className="row ec-vendor-uploads">
                  <div className="col-lg-4">
                    <div className="ec-vendor-img-upload">
                      <div className="ec-vendor-main-img">


<div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              name="avatar"
              multiple
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleImageChange(e, 'avatar')}
            />
            <label htmlFor="imageUpload">
              <img
                src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
                className="svg_img header_svg"
                alt="edit"
              />
            </label>
          </div>
          <div className="avatar-preview ec-preview">
            <div className="imagePreview ec-div-preview">
              <img
                className="ec-image-preview"
                src={avatarImageUrls.length > 0 ? avatarImageUrls[0] : avatarImages.length > 0 ? avatarImages[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
                alt="preview"
              />
            </div>
          </div>
        </div>





  <div className="thumb-upload-set colo-md-12">
  {/* Thumbnail 1 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input
  type="file"
  name="thumb1"  // Updated to 'thumb1'
  multiple
  accept=".png, .jpg, .jpeg"
  onChange={(e) => handleImageChange(e, 'thumb1')}
/>
      <label htmlFor="thumbUpload01">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb1ImageUrls.length > 0 ? thumb1ImageUrls[0] : thumb1Images.length > 0 ? thumb1Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


  {/* Thumbnail 2 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb2" multiple onChange={(e) => handleImageChange(e, 'thumb2')} />
      <label htmlFor="thumbUpload02">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb2ImageUrls.length > 0 ? thumb2ImageUrls[0] : thumb2Images.length > 0 ? thumb2Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


  {/* Thumbnail 3 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb3" multiple onChange={(e) => handleImageChange(e, 'thumb3')} />
      <label htmlFor="thumbUpload03">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb3ImageUrls.length > 0 ? thumb3ImageUrls[0] : thumb3Images.length > 0 ? thumb3Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


 {/* Thumbnail 4 */}
 <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb4" multiple onChange={(e) => handleImageChange(e, 'thumb4')} />
      <label htmlFor="thumbUpload04">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb4ImageUrls.length > 0 ? thumb4ImageUrls[0] : thumb4Images.length > 0 ? thumb4Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>

  {/* Thumbnail 5 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb5" multiple onChange={(e) => handleImageChange(e, 'thumb5')} />

      <label htmlFor="thumbUpload05">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb5ImageUrls.length > 0 ? thumb5ImageUrls[0] : thumb5Images.length > 0 ? thumb5Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


  {/* Thumbnail 6 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb6" multiple onChange={(e) => handleImageChange(e, 'thumb6')} />
      <label htmlFor="thumbUpload06">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb6ImageUrls.length > 0 ? thumb6ImageUrls[0] : thumb6Images.length > 0 ? thumb6Images[0] : 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>      
</div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-8">
                    <div className="ec-vendor-upload-detail">
                      <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-12">
                          <label for="inputEmail4" className="form-label">Product name</label>
                          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control slug-title" id="inputEmail4"/>                      
                        </div>

<div className="col-md-12">
      <label htmlFor="slug" className="col-12 col-form-label">Slug</label>
      <div className="col-12">
        <input
          id="slug"
          name="slug"
          className="form-control here set-slug"
          type="text"
          value={slug}
          onChange={handleInputslug}
        />
      </div>
    </div>

                        <div className="col-md-12">
                          <label className="form-label">Sort Description</label>
                          <textarea  value={description} onChange={(event) => setDescription(event.target.value)} className="form-control" rows="2"></textarea>
                        </div>
                     
                       


      
                         <hr/>


                         <div className="col-md-12 mt-5 mb-25">
  <label className="form-label">Vehicle Type</label>
  <div className="form-checkbox-box">
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="car"
        name="size1"
        checked={tyreType === 'car'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Car</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="bike"
        name="size1"
        checked={tyreType === 'bike'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Bike</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="truck"
        name="size1"
        checked={tyreType === 'truck'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Truck</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="tractor"
        name="size1"
        checked={tyreType === 'tractor'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Tractor</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="battery"
        name="size1"
        checked={tyreType === 'battery'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Battery</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="alloywheel"
        name="size1"
        checked={tyreType === 'alloywheel'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Alloy Wheel</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="accessories"
        name="size1"
        checked={tyreType === 'accessories'}
        onChange={(event) => setType(event.target.value)}
      />
      <label>Accessories</label>
    </div>
  </div>
</div>





                              <div className="form-group row">
                            <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                            <div className="col-12">
                                <div>
                                <Select
                      id="tyreBrand"
                      name="tyreBrand"
                      value={selectedTyreBrands}
                      onChange={handleSelectChange}
                      options={activeTyreBrands.map(brand => ({
                        value: brand._id, // ID for form data
                        label: brand.name // Name for display
                      }))}
                      className="form-input"
                      isMulti
                    />
                                    </div>
                            </div>
                          </div>




                        {tyreType === 'car' && (
                          <>
    
<div>
    <div className="col-md-12">
      <label className="form-label">Car Brand</label>
      <Select
        isMulti
        options={carBrands}
        value={selectedCarBrands}
        onChange={handleCarBrandsChange}
        className="form-input"
      />
      <br/>
      
      <div className="col-md-12">
        <label className="form-label">Car Models </label>
        <Select
          isMulti
          options={carModels}
          value={selectedCarModels}
          onChange={handleCarModelsChange}
          className="form-input"
        />
      </div>
      <br/>
    </div>
  </div>      
                        </>
                        )}

                            {tyreType === 'bike' && (
                          <>
                          

<div className="col-md-12">
      <label className="form-label">Bike Brand</label>
      <Select
        isMulti
        options={bikeBrands}
        value={selectedBikeBrands}
        onChange={handleBikeBrandsChange}
        className="form-input"
      />

      <br/>

      <div className="col-md-12">
        <label className="form-label">
          Bike Models 
        </label>
        <Select
          isMulti
          options={bikeModels}
          value={selectedBikeModels}
          onChange={handleBikeModelsChange}
          className="form-input"
        />
      </div>
      <br/>
    </div>



                        <div className="col-md-12 mt-5 mb-25">
                          <label className="form-label">Tyre Type</label>
                          <div className="form-checkbox-box">
                            <div className="form-check form-check-inline">
                            <input type="radio" value={fronttyre} onChange={(event) => setFronttyre(event.target.value)} className="form-input" />
                              <label>Front Tyre</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input type="radio" value={reartyre} onChange={(event) => setRearTyre(event.target.value)} className="form-input" />
                              <label>Rear Tyre</label>
                            </div>
                           
                          </div>
                        </div>

                        </>
                        )}  


{tyreType === 'truck' && (
  <>
    <div className="col-md-12">
      <label className="form-label">Truck Brand</label>
      <Select
        isMulti
        options={truckBrands}
        value={selectedTruckBrands}
        onChange={setSelectedTruckBrands}
        className="form-input"
      />
   
    <br/>
    <div className="col-md-12">
      <label className="form-label">Truck Models <span>(Type and make comma to separate tags)</span></label>
      <Select
        isMulti
        options={truckModels}
        value={selectedTruckModels}
        onChange={setSelectedTruckModels}
        className="form-input"
      />
    </div>
    <br/>
    </div>
    
  </>
)}

{tyreType === 'tractor' && (
        <>
          <div className="col-md-12">
            <label className="form-label">Tractor Brand</label>
            <Select
              isMulti
              options={tractorBrands}
              value={selectedTractorBrands}
              onChange={setSelectedTractorBrands}
              className="form-input"
            />
       
          <br/>
          <div className="col-md-12">
            <label className="form-label">Tractor Models </label>
            <Select
              isMulti
              options={tractorModels}
              value={selectedTractorModels}
              onChange={setSelectedTractorModels}
              className="form-input"
            />
          </div>
          <br/>
          </div>
        </>
      )}


{tyreType === 'battery' && (
  <>
    <div className="col-md-12 mt-3 mb-3">
      <label className="form-label">Battery Type</label>
      <div className="form-checkbox-box">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            value="car"
            name="batteryType"
            checked={batteryType === 'car'}
            onChange={(e) => setBatteryType(e.target.value)}
            className="form-input"
          />
          <label>Car Battery</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            value="bike"
            name="batteryType"
            checked={batteryType === 'bike'}
            onChange={(e) => setBatteryType(e.target.value)}
            className="form-input"
          />
          <label>Bike Battery</label>
        </div>
      </div>
    </div>

 

 
          <div className="col-md-12">
            <label className="form-label">Battery Brand</label>
            <Select
              isMulti
              options={batteryBrands}
              value={selectedBatteryBrands}
              onChange={handleBatteryBrandsChange}
              className="form-input"
            />
          </div>
          <br />
          <div className="col-md-12">
            <label className="form-label">Battery Models</label>
            <Select
              isMulti
              options={batteryModels}
              value={selectedBatteryModels}
              onChange={handleBatteryModelsChange}
              className="form-input"
            />
          </div>


        <br/>
        
 


    {batteryType === 'car' && (
      <>
        <div className="col-md-12">
          <label className="form-label">Car Brand</label>
          <Select
            isMulti
            options={carBrands}
            value={selectedCarBrands}
            onChange={handleCarBrandsChange}
            className="form-input"
          />
        </div>
        <br />
        <div className="col-md-12">
          <label className="form-label">Car Models</label>
          <Select
            isMulti
            options={carModels}
            value={selectedCarModels}
            onChange={handleCarModelsChange}
            className="form-input"
          />
        </div>
        <br />
      </>
    )}

    {batteryType === 'bike' && (
      <>
        <div className="col-md-12">
          <label className="form-label">Bike Brand</label>
          <Select
            isMulti
            options={bikeBrands}
            value={selectedBikeBrands}
            onChange={handleBikeBrandsChange}
            className="form-input"
          />
        </div>
        <br />
        <div className="col-md-12">
          <label className="form-label">Bike Models</label>
          <Select
            isMulti
            options={bikeModels}
            value={selectedBikeModels}
            onChange={handleBikeModelsChange}
            className="form-input"
          />
        </div>
        <br />
      </>
    )}
  </>
)}

{tyreType === 'alloywheel' && (
        <>
          <div className="col-md-12 mt-3 mb-3">
            <label className="form-label">Alloy Wheel Type</label>
            <div className="form-checkbox-box">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  value="car"
                  name="alloywheelType"
                  checked={alloywheelType === 'car'}
                  onChange={(e) => setAlloywheelType(e.target.value)}
                  className="form-input"
                />
                <label>Car Alloy Wheel</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  value="bike"
                  name="alloywheelType"
                  checked={alloywheelType === 'bike'}
                  onChange={(e) => setAlloywheelType(e.target.value)}
                  className="form-input"
                />
                <label>Bike Alloy Wheel</label>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <label className="form-label">Alloy Wheel Brand</label>
            <Select
              isMulti
              options={alloywheelBrands}
              value={selectedAlloywheelBrands}
              onChange={handleAlloywheelBrandsChange}
              className="form-input"
            />
          </div>
          <br />
          <div className="col-md-12">
            <label className="form-label">Alloy Wheel Models</label>
            <Select
              isMulti
              options={alloywheelModels}
              value={selectedAlloywheelModels}
              onChange={handleAlloywheelModelsChange}
              className="form-input"
            />
          </div>
          <br />

          {alloywheelType === 'car' && (
            <>
              <div className="col-md-12">
                <label className="form-label">Car Brand</label>
                <Select
                  isMulti
                  options={carBrands} // Assuming you have an array of car brands
                  value={selectedCarBrands}
                  onChange={handleCarBrandsChange}
                  className="form-input"
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="form-label">Car Models</label>
                <Select
                  isMulti
                  options={carModels} // Assuming you have an array of car models
                  value={selectedCarModels}
                  onChange={handleCarModelsChange}
                  className="form-input"
                />
              </div>
              <br />
            </>
          )}

          {alloywheelType === 'bike' && (
            <>
              <div className="col-md-12">
                <label className="form-label">Bike Brand</label>
                <Select
                  isMulti
                  options={bikeBrands} // Assuming you have an array of bike brands
                  value={selectedBikeBrands}
                  onChange={handleBikeBrandsChange}
                  className="form-input"
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="form-label">Bike Models</label>
                <Select
                  isMulti
                  options={bikeModels} // Assuming you have an array of bike models
                  value={selectedBikeModels}
                  onChange={handleBikeModelsChange}
                  className="form-input"
                />
              </div>
              <br />
            </>
          )}
        </>
      )}


{tyreType === 'accessories' && (
                                <>
                                  <div className="col-md-12 mt-3 mb-3">
                                    <label className="form-label">Accessory Type</label>
                                    <div className="form-checkbox-box">
                                      <div className="form-check form-check-inline">
                                        <input
                                          type="radio"
                                          value="car"
                                          name="accessoryType"
                                          checked={accessoryType === 'car'}
                                          onChange={(e) => setAccessoryType(e.target.value)}
                                          className="form-input"
                                        />
                                        <label>Car Accessories</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input
                                          type="radio"
                                          value="bike"
                                          name="accessoryType"
                                          checked={accessoryType === 'bike'}
                                          onChange={(e) => setAccessoryType(e.target.value)}
                                          className="form-input"
                                        />
                                        <label>Bike Accessories</label>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Accessory Brand and Model Selection */}
                                  {accessoryType && (
                                    <>
                                      <div className="col-md-12">
                                      <label className="form-label">Accessories Brand</label>
                                        <Select
                                          isMulti
                                          options={accessoryBrands} // Assuming you have an array of accessory brands
                                          value={selectedAccessoryBrands}
                                          onChange={handleAccessoryBrandsChange}
                                          className="form-input"
                                        />
                                      </div>
                                      <br />
                                      <div className="col-md-12">
                                        <label className="form-label">Accessories Model</label>
                                        <Select
                                          isMulti
                                          options={accessoryModels} // Assuming you have an array of accessory models
                                          value={selectedAccessoryModels}
                                          onChange={handleAccessoryModelsChange}
                                          className="form-input"
                                        />
                                      </div>
                                      <br />
                                    </>
                                  )}
                                </>
                              )}



                        <hr/>

                        <div className="col-md-4">
                          <label className="form-label">Warranty</label>    
                            <select  name="categories" id="Categories" value={warranty} onChange={(event) => setWarranty(event.target.value)} className="form-select">
                            <option value="">Select Warranty Period</option>
                            {warrantyOptions.map((option, index) => (
                            <option key={index} value={option}>
                               {option}
                                 </option>
                                ))}
                              </select>
                        </div>

                        
{tyreType !== 'accessories' && (
  <div className="col-md-4">
    <label className="form-label">
      {tyreType === 'battery' ? 'Battery Capacity' : 
       tyreType === 'alloywheel' ? 'Wheel Size' : 
       'Speed Rating'}
    </label>
    <select
      name="categories"
      id="Categories"
      value={
        tyreType === 'battery' ? batteryCapacity :
        tyreType === 'alloywheel' ? WheelSize : 
        speedRating
      }
      onChange={(event) => {
        if (tyreType === 'battery') {
          setBatteryCapacity(event.target.value);
        } else if (tyreType === 'alloywheel') {
          setWheelSize(event.target.value);
        } else {
          setspeedRating(event.target.value);
        }
      }}
      className="form-select"
    >
      <option value="">
        {tyreType === 'battery' ? 'Select Battery Capacity' : 
         tyreType === 'alloywheel' ? 'Select Wheel Size' : 
         'Select Speed Rating'}
      </option>
      {(tyreType === 'battery' ? batteryCapacityOptions : 
        tyreType === 'alloywheel' ? wheelSizeOptions : 
        SpeedRating1).map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
)}



{tyreType !== 'accessories' && (
  <div className="col-md-4">
    <label className="form-label">
      {tyreType === 'battery' ? 'Voltage' : 
       tyreType === 'alloywheel' ? 'Color' : 
       'Load Capacity'}
    </label>
    <select
      name="categories"
      id="Categories"
      value={
        tyreType === 'battery' ? voltage : 
        tyreType === 'alloywheel' ? Color : 
        loadCapacity
      }
      onChange={(event) => {
        if (tyreType === 'battery') {
          setVoltage(event.target.value);
        } else if (tyreType === 'alloywheel') {
          setColor(event.target.value);
        } else {
          setloadCapacity(event.target.value);
        }
      }}
      className="form-input"
    >
      <option value="">
        {tyreType === 'battery' ? 'Select Voltage' : 
         tyreType === 'alloywheel' ? 'Select Color' : 
         'Select Load Capacity'}
      </option>
      {(tyreType === 'battery' ? voltageOptions : 
        tyreType === 'alloywheel' ? colorOptions : 
        LoadCapacity1).map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)}

                        
{tyreType !== 'battery' && tyreType !== 'accessories' && (
  <div className="col-md-4">
    <label className="form-label">Material</label>
    <select
      name="categories"
      id="Categories"
      value={material}
      onChange={(event) => setMaterial(event.target.value)}
      className="form-input"
    >
      <option value="">Material</option>
      {Material.map((material, index) => (
        <option key={index} value={material}>
          {material}
        </option>
      ))}
    </select>
  </div>
)}


 {tyreType !== 'accessories' && (
  <div className="col-md-3">
    <label className="form-label">
      {tyreType === 'battery' ? 'Battery Weight' : 
       tyreType === 'alloywheel' ? 'Holes' : 
       'Width'}
    </label>
    <select
      name="categories"
      id="Categories"
      value={
        tyreType === 'battery' ? batteryWeight : 
        tyreType === 'alloywheel' ? Holes : 
        width
      }
      onChange={(event) => {
        if (tyreType === 'battery') {
          setBatteryWeight(event.target.value);
        } else if (tyreType === 'alloywheel') {
          setHoles(event.target.value);
        } else {
          setWidth(event.target.value);
        }
      }}
      className="form-input"
    >
      <option value="">
        {tyreType === 'battery' ? 'Select Battery Weight' : 
         tyreType === 'alloywheel' ? 'Select Holes' : 
         'Select Weight'}
      </option>
      {(tyreType === 'battery' ? batteryWeightOptions : 
        tyreType === 'car' ? widthOptions : 
        tyreType === 'alloywheel' ? holesOptions : 
        widthOptions1).map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)}


{tyreType !== 'accessories' && (
  <div className="col-md-3">
    <label className="form-label">
      {tyreType === 'battery' ? 'Battery Height' : 
       tyreType === 'alloywheel' ? 'PCD' : 
       'Height'}
    </label>
    <select
      name="categories"
      id="Categories"
      value={
        tyreType === 'battery' ? batteryHeight : 
        tyreType === 'alloywheel' ? PCD : 
        height
      }
      onChange={(event) => {
        if (tyreType === 'battery') {
          setBatteryHeight(event.target.value);
        } else if (tyreType === 'alloywheel') {
          setPCD(event.target.value);
        } else {
          setHeight(event.target.value);
        }
      }}
      className="form-input"
    >
      <option value="">
        {tyreType === 'battery' ? 'Select Battery Height' : 
         tyreType === 'alloywheel' ? 'Select PCD' : 
         'Select Height'}
      </option>
      {(tyreType === 'battery' ? batteryHeightOptions : 
        tyreType === 'car' ? heightOptions : 
        tyreType === 'alloywheel' ? pcdOptions : 
        heightOptions1).map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)} 




{tyreType !== 'battery' && tyreType !== 'alloywheel' && tyreType !== 'accessories' && (
  <div className="col-md-3">
    <label className="form-label">Customs</label>
    <select
      name="categories"
      id="Categories"
      value={customs}
      onChange={(event) => setCustoms(event.target.value)}
      className="form-input"
    >
      <option value="">Custom</option>
      {/* Conditionally render the customs options based on the selected vehicle type */}
      {(tyreType === 'car' ? customsOptions : customsOptions1).map((custom, index) => (
        <option key={index} value={custom}>
          {custom}
        </option>
      ))}
    </select>
  </div>
)}




{tyreType !== 'battery' && tyreType !== 'accessories' && (
  <div className="col-md-5 mb-25">
    <label className="form-label">Seasons</label>
    <div className="form-checkbox-box">
      <div className="form-check form-check-inline">
        <input
          type="checkbox"
          name="seasons"
          value="Winter"
          checked={seasons.includes("Winter")}
          onChange={(event) => {
            if (event.target.checked) {
              setSeasons([...seasons, event.target.value]);
            } else {
              setSeasons(seasons.filter((season) => season !== event.target.value));
            }
          }}
        />
        <label>Winter</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          type="checkbox"
          name="seasons"
          value="Summer"
          checked={seasons.includes("Summer")}
          onChange={(event) => {
            if (event.target.checked) {
              setSeasons([...seasons, event.target.value]);
            } else {
              setSeasons(seasons.filter((season) => season !== event.target.value));
            }
          }}
        />
        <label>Summer</label>
      </div>
    </div>
  </div>
)}


                        <div className="col-md-5">
                          <label className="form-label">Price <span>( In INR
                              )</span></label>
                              <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} className="form-select" />
                        </div>

                        <div className="col-md-5">
                          <label className="form-label">Sale Price <span>( In INR
                            )</span></label>
                           <input type="number" value={Salesprice} onChange={(event) => setSalesprice(event.target.value)} className="form-select" />
                        </div>

                        
                        <div className="col-md-2">
                          <label className="form-label">Quantity</label>
<select name="categories" id="Categories" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="form-input">
    <option value="number">Quantity</option>
    {Quantity.map((quantity, index) => (
      <option key={index} value={quantity}>
        {quantity}
      </option>
    ))}
  </select>
</div>

                        <div className="col-md-5">
                          <label className="form-label">Manufacture Month
                              </label>
                              <select value={manufactureMonth} onChange={(event) => setManufactureMonth(event.target.value)} className="form-input">
                          <option value="">Select Month</option>
                          {monthOptions.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                        </div>


                        <div className="col-md-5">
                          <label className="form-label">Manufacture Year   </label>
                          <select value={manufactureYear} onChange={(event) => setManufactureYear(event.target.value)} className="form-input">
                          <option value="">Select Year</option>
                          {yearOptions.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        </div>


                       
                       <hr/> 

                       <br/>

    <div>
      <label>
        Description:
        <ReactQuill
          value={description1}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          className="form-input" // You can style this with your own CSS
          placeholder="Write something awesome..."
        />
      </label>    
      <br />
    </div>
    {addresses.map((address, index) => (
        <div key={index} className="address-section">
          <label>
            State:
            <select
              value={address.state}
              onChange={(e) => handleStateChange(index, e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(stateCityData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>

          <label>
            City:
<select
  value={address.city}
  onChange={(e) => handleCityChange(index, e.target.value)}
  disabled={!address.state}
>
  <option value="">Select City</option>
  {(addressCities[index] || []).map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>
          </label>


<label>
  Pincode:
  <input
    type="text"
    name="pinCode"
    value={addresses[index].pinCode}  
    onChange={(e) => handleInputChange(index, 'pinCode', e.target.value)}  // Update pinCode in addresses array
    placeholder="Pincode"
    
  />
</label>


<label>
  Addresses:
  <textarea
    value={address.details}
    onChange={(e) => handleInputChange(index, 'details', e.target.value)}
    placeholder="Enter address details"
  />
</label>

          <button type="button" className='btn btn-danger' onClick={() => removeAddress(index)}>Delete</button> 
          <button type="button"  className="btn btn-success m-3"  onClick={addAddress}>Add</button>
        </div>
      ))}

                        <div className="col-md-12">
                       
                        {success && <p className="success-message1">{success}</p>}
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <Footer/>

  </div> 
</div> 

</body>
  );
};

export default AddproductEdit;





