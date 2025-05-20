



// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';

// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Siderbar/Sidebar';
// import axios from 'axios';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // or 'quill.bubble.css', depending on the theme
// import { useNavigate } from 'react-router-dom';


// import url from "../../env.js"


//  const AddTyreForm = () => {
  




//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user navigated directly to this page
//     if (document.referrer === '') {
//         // If the referrer is empty, redirect to home or another page
//         navigate('/');
//     }
// }, [navigate]);


// const [batteryType, setBatteryType] = useState('');

//   const [type, setType] = useState('');
//   const [title, setTitle] = useState('');
//   // const [tyreType, setTyreType] = useState('');
//   const [tyreModel, setTyreModel] = useState([]);
//   const [width, setWidth] = useState([]);
//   const [height, setHeight] = useState([]);
//   const [customs, setCustoms] = useState([]);
//   const [seasons, setSeasons] = useState([]);
//   const [speedRating, setspeedRating] = useState([]);
//   const [loadCapacity, setloadCapacity] = useState([]);
//   const [material, setMaterial] = useState([]);
//   const [image, setImage] = useState([]);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [price, setPrice] = useState('');
//   const [Salesprice, setSalesprice] = useState('');
//   const [description, setDescription] = useState('');
//   const [fronttyre, setFronttyre] = useState('');
//   const [reartyre, setRearTyre] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [manufactureMonth, setManufactureMonth] = useState('');
//   const [manufactureYear, setManufactureYear] = useState('');
//   const [description1, setDescription1] = useState('');
//   const [warranty, setWarranty] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [tyreBrands, setTyreBrands] = useState([]);
//   const [selectedTyreBrand, setSelectedTyreBrand] = useState([]);
// const [tyreType, setTyreType] = useState(''); // Radio button state: car or bike tyres
// const [selectedCarModels, setSelectedCarModels] = useState([]);
// const [carBrands, setCarBrands] = useState([]);
// const [carModels, setCarModels] = useState([]);
// const [selectedCarBrands, setSelectedCarBrands] = useState([]); // Supports multiple selections
// const [bikeBrands, setBikeBrands] = useState([]);
// const [bikeModels, setBikeModels] = useState([]);
// const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
// const [selectedBikeModels, setSelectedBikeModels] = useState([]);
// const [selectedStates, setSelectedStates] = useState([]);
// const [selectedCities, setSelectedCities] = useState([]);
// const [formData , setFormData] = useState([])
// const [cities, setCities] = useState([]);
// const [avatarImages, setAvatarImages] = useState([]);
// const [avatarImageUrls, setAvatarImageUrls] = useState([]); 
// const [thumb1Images, setThumb1Images] = useState([]);
// const [thumb1ImageUrls, setThumb1ImageUrls] = useState([]);
// const [thumb2Images, setThumb2Images] = useState([]);
// const [thumb2ImageUrls, setThumb2ImageUrls] = useState([]);
// const [thumb3Images, setThumb3Images] = useState([]);
// const [thumb3ImageUrls, setThumb3ImageUrls] = useState([]);
// const [thumb4Images, setThumb4Images] = useState([]);
// const [thumb4ImageUrls, setThumb4ImageUrls] = useState([]);
// const [thumb5Images, setThumb5Images] = useState([]);
// const [thumb5ImageUrls, setThumb5ImageUrls] = useState([]);
// const [thumb6Images, setThumb6Images] = useState([]);
// const [thumb6ImageUrls, setThumb6ImageUrls] = useState([]);

// // Battery


// const [batteryBrands, setBatteryBrands] = useState([]);
//   const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
//   const [batteryModels, setBatteryModels] = useState([]);
//   const [selectedBatteryModels, setSelectedBatteryModels] = useState([]);

//   const [batteryWeight, setBatteryWeight] = useState('');
//     const [batteryHeight, setBatteryHeight] = useState('');
//     const [batteryCapacity, setBatteryCapacity] = useState('');
//     const [voltage, setVoltage] = useState('');

// //truck
// const [truckBrands, setTruckBrands] = useState([]);
// const [selectedTruckBrands, setSelectedTruckBrands] = useState([]);
// const [truckModels, setTruckModels] = useState([]);
// const [selectedTruckModels, setSelectedTruckModels] = useState([]);


// // Add a state for tractor brands and models
// const [tractorBrands, setTractorBrands] = useState([]);
// const [selectedTractorBrands, setSelectedTractorBrands] = useState([]);
// const [tractorModels, setTractorModels] = useState([]);
// const [selectedTractorModels, setSelectedTractorModels] = useState([]);


//   const [Color, setColor] = useState('');
//   const [WheelSize, setWheelSize] = useState('');
//   const [Holes, setHoles] = useState('');
//   const [PCD, setPCD] = useState('');
//   const [alloywheelType, setAlloywheelType] = useState('');
//   const [selectedAlloywheelBrands, setSelectedAlloywheelBrands] = useState([]);
//   const [alloywheelBrands, setAlloywheelBrands] = useState([]);
//   const [alloywheelModels, setAlloywheelModels] = useState([]); // Array to hold alloy wheel models
//   const [selectedAlloywheelModels, setSelectedAlloywheelModels] = useState([]); // Selected alloy wheel models


//   const [accessoryType, setAccessoryType] = useState('');
//   const [accessoryBrands, setAccessoryBrands] = useState([]);
//   const [selectedAccessoryBrands, setSelectedAccessoryBrands] = useState([]);
//   const [accessoryModels, setAccessoryModels] = useState([]);
//   const [selectedAccessoryModels, setSelectedAccessoryModels] = useState([]);



// const [slug, setSlug] = useState("");

//   const [addresses, setAddresses] = useState([
//     { state: '', city: '', pinCode: '', details: '' }
//   ]);

//   const addAddress = () => {
//     setAddresses([...addresses, { state: '', city: '', pinCode: '', details: '' }]);
//   };

//   const removeAddress = (index) => {
//     const newAddresses = addresses.filter((_, i) => i !== index);
//     setAddresses(newAddresses);
//   };

//   const handleStateChange = (index, state) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index].state = state;
//     updatedAddresses[index].city = ''; // Reset city when state changes
//     setAddresses(updatedAddresses);
//     setCities(stateCityData[state] || []);
//   };

//   const handleCityChange = (index, city) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index].city = city;
//     setAddresses(updatedAddresses);
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index][field] = value;
//     setAddresses(updatedAddresses);
//   };




//   // -------------- Tyre Brand --------------------------------


//   useEffect(() => {
//     const fetchTyreBrands = async () => {
//       try {
//         const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setTyreBrands(data);
//       } catch (error) {
//         console.error('Failed to load tyre brands:', error);
//       }
//     };

//     fetchTyreBrands();
//   }, []);

//   const activeTyreBrands = tyreBrands.filter(brand => brand.active);

//   // Handle form input changes

//   const handleSelectChange = (selectedOptions) => {
//     const selectedValues = selectedOptions.map(option => option.value); // Keep as IDs
//     setSelectedTyreBrand(selectedOptions);
//     setFormData({
//       ...formData,
//       tyreBrand: selectedValues
//     });
//   };


//   const handleImageChange = (event, thumbId) => {
//     const files = Array.from(event.target.files);
//     if (files.length > 0) {
//       const imageUrls = files.map((file) => URL.createObjectURL(file));
  
//       switch (thumbId) {
//         case 'avatar':
//           setAvatarImages(files); // For avatar image
//           setAvatarImageUrls(imageUrls); // For avatar preview
//           break;
//         case 'thumb1':
//           setThumb1Images(files);
//           setThumb1ImageUrls(imageUrls);
//           break;
//         case 'thumb2':
//           setThumb2Images(files);
//           setThumb2ImageUrls(imageUrls);
//           break;
//         case 'thumb3':
//           setThumb3Images(files);
//           setThumb3ImageUrls(imageUrls);
//           break;
//         case 'thumb4':
//           setThumb4Images(files);
//           setThumb4ImageUrls(imageUrls);
//           break;
//         case 'thumb5':
//           setThumb5Images(files);
//           setThumb5ImageUrls(imageUrls);
//           break;
//         case 'thumb6':
//           setThumb6Images(files);
//           setThumb6ImageUrls(imageUrls);
//           break;
//         default:
//           break;
//       }
//     }
//   };

  
//   // List of months and years
//   const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const yearOptions = Array.from({ length: 20 }, (v, k) => (new Date().getFullYear() - k).toString());

//   // Object holding states and their respective cities
//   const stateCityData = {
//     AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Anantapur'],
//     ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Bomdila', 'Tezu', 'Changlang'],
//     Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
//     Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai'],
//     Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
//     Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona'],
//     Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
//     Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Sonipat', 'Rohtak'],
//     HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Bilaspur', 'Chamba'],
//     Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
//     Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Gulbarga', 'Shimoga'],
//     Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha'],
//     MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna'],
//     Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur', 'Solapur'],
//     Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Kakching'],
//     Meghalaya: ['Shillong', 'Tura', 'Nongpoh', 'Cherrapunji', 'Nongstoin', 'Baghmara', 'Jowai', 'Mawkyrwat'],
//     Mizoram: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Saiha', 'Kolasib', 'Lawngtlai', 'Mamit'],
//     Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto', 'Phek'],
//     Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada'],
//     Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
//     Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
//     Sikkim: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla', 'Mangan', 'Yuksom', 'Jorethang'],
//     TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
//     Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Suryapet'],
//     Tripura: ['Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Ambassa', 'Belonia', 'Khowai', 'Teliamura'],
//     UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Bareilly'],
//     Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee', 'Rudrapur', 'Kashipur'],
//     WestBengal: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur', 'Malda']
//   };
  

//   // Example options — you can modify these based on your data
// const batteryWeightOptions = [ '1kg', '2kg', '3kg', '4kg', '5kg', 
//   '6kg', '7kg', '8kg', '9kg', '10kg', 
//   '12kg', '14kg', '16kg', '18kg', '20kg', 
//   '22kg', '24kg', '26kg', '28kg', '30kg', 
//   '35kg', '40kg', '45kg', '50kg', '55kg', 
//   '60kg', '65kg', '70kg', '75kg', '80kg', 
//   '85kg', '90kg', '95kg', '100kg'];

// const batteryHeightOptions = ['50mm', '60mm', '70mm', '80mm', '90mm', 
//   '100mm', '110mm', '120mm', '130mm', '140mm', 
//   '150mm', '160mm', '170mm', '180mm', '190mm', 
//   '200mm', '210mm', '220mm', '230mm', '240mm'];

// const voltageOptions = ['6V', '12V',  '24V',  '36V',  '48V','60V',  '72V', 
//    '100V', '300V','400V', '800V' ];

// const batteryCapacityOptions = [
//   '1Ah', '2Ah', '3Ah', '4Ah', '5Ah', '6Ah', '7Ah', '8Ah', '9Ah', '10Ah',
//   '11Ah', '12Ah', '13Ah', '14Ah', '15Ah', '16Ah', '17Ah', '18Ah', '19Ah', '20Ah',
//   '21Ah', '22Ah', '23Ah', '24Ah', '25Ah', '26Ah', '27Ah', '28Ah', '29Ah', '30Ah',
//   '31Ah', '32Ah', '33Ah', '34Ah', '35Ah', '36Ah', '37Ah', '38Ah', '39Ah', '40Ah',
//   '41Ah', '42Ah', '43Ah', '44Ah', '45Ah', '46Ah', '47Ah', '48Ah', '49Ah', '50Ah',
//   '51Ah', '52Ah', '53Ah', '54Ah', '55Ah', '56Ah', '57Ah', '58Ah', '59Ah', '60Ah',
//   '61Ah', '62Ah', '63Ah', '64Ah', '65Ah', '66Ah', '67Ah', '68Ah', '69Ah', '70Ah',
//   '71Ah', '72Ah', '73Ah', '74Ah', '75Ah', '76Ah', '77Ah', '78Ah', '79Ah', '80Ah',
//   '81Ah', '82Ah', '83Ah', '84Ah', '85Ah', '86Ah', '87Ah', '88Ah', '89Ah', '90Ah',
//   '91Ah', '92Ah', '93Ah', '94Ah', '95Ah', '96Ah', '97Ah', '98Ah', '99Ah', '100Ah'
// ];



// //Alloy Wheels 
// const colorOptions = [
//   'Silver', 'Black', 'Gun Metal', 'Matt Black', 'Black + Red', 
//   'Matt Anthracite', 'Glossy Anthracite', 'FMBK', 'Black Milling', 
//   'Black Machined', 'Black UCM (1 item)', 'Glossy Black', 
//   'Silver Machined', 'Candy Black Machined', 'Matt Bronze (1 item)', 
//   'EP Clear Sheen Silver', 'C Clear Starlight Bla', 'FP Clear Neon', 
//   'FP Lustrous Bronze'
// ];
// const wheelSizeOptions = ['14 inches','15 inches', '16 inches', '17 inches', '18 inches', '19 inches'];
// const holesOptions = ['4 Holes', '5 Holes', '6 Holes' , '7 Holes' ,'8 Holes'];
// const pcdOptions = ['98mm', '100mm', '108mm', '110mm', '112mm', '114.3mm', '115mm', '120mm', '127mm', '130mm', '139.7mm', '160mm','180mm'];


// //car
//   const widthOptions = [31,33,35,37,115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
//   const heightOptions = [35,40,45,50,55,60,65,70,75,80];
//   const  customsOptions= [15,16,17,19];

// //bike
//   const widthOptions1 = [2.50 ,2.75,3.00,3.25,3.50,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,240,260];
//   const heightOptions1 = [60,65,70,75,80,90,100,600,605];
//   const customsOptions1 = [10,11,12,13,14,15,16,17,18,19,21,23];


//   const SpeedRating1= ['Q : up to 160 km/h', 'R: up to 170 km/h',' S:up to 180 km/h', "T: up to 190 km/h" , " H: up to 210 km/h ", " V: up to 240 km/h"];
//   const LoadCapacity1 = [47, 52, 54, 58, 62, 65, 69, 73, 82, 85, 88, 91, 94, 95, 98, 99, 100, 104, 108] 
//   const Quantity = [1,2,3,4,5,6,7,8,9,10];
//   const Material = ["Steel","Nylon"];
//   const warrantyOptions = ['1 year','2 years','3 years','4 years','5 years','6 years','7 years','8 years','9 years','10 years',
//   ];

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('type', type);
//       formData.append('slug', slug);
//       formData.append('title', title);
//       formData.append('tyreType', tyreType);
//       formData.set('tyreBrand', selectedTyreBrand.map(option => option.value).join(','));
//       formData.append('carbrand', selectedCarBrands.map(option => option.value).join(','));       
//       formData.append('carModel', selectedCarModels.map(option => option.value).join(','));
//       formData.append('bikeBrand',selectedBikeBrands.map(option => option.value).join(','));
//       formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(','));

//       formData.append('truckBrand', selectedTruckBrands.map(option => option.value).join(',')); // Truck Brand
//       formData.append('truckModel', selectedTruckModels.map(option => option.value).join(',')); // Truck Model
  
// // Add tractor brand and model
// formData.append('tractorBrand', selectedTractorBrands.map(option => option.value).join(',')); // Tractor Brand
// formData.append('tractorModel', selectedTractorModels.map(option => option.value).join(',')); // Tractor Model

// //Battery
// // Append car and bike brands/models based on tyreType
// if (tyreType === 'battery') {
//   formData.append('batteryType', batteryType); // car or bike
//   formData.append('BatteryBrand', selectedBatteryBrands.map(option => option.value).join(','));
//   formData.append('BatteryModel', selectedBatteryModels.map(option => option.value).join(','));
// formData.append('batteryweight', batteryWeight);
// formData.append('batteryheight', batteryHeight);
// formData.append('capacity', batteryCapacity);
// formData.append('voltage', voltage);
//   // Append car or bike brands/models based on batteryType
//   if (batteryType === 'car') {
//     formData.append('carbrand', selectedCarBrands.map(option => option.value).join(',')); // Car brands
//     formData.append('carModel', selectedCarModels.map(option => option.value).join(',')); // Car models
    
//   } else if (batteryType === 'bike') {
//     formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(',')); // Bike brands
//     formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(',')); // Bike models
//   }
// }


//   // Alloy Wheel
//   if (tyreType === 'alloywheel') {
//     formData.append('WheelSize', WheelSize); // Wheel size
//     formData.append('Holes', Holes); // Number of holes
//     formData.append('Color', Color); // Color
//     formData.append('PCD', PCD); // PCD
//     formData.append('alloywheelType', alloywheelType); // car or bike
//       // Append alloy wheel brand and model
//   formData.append('alloywheelBrand', selectedAlloywheelBrands.map(option => option.value).join(',')); // Alloy wheel brands
//   formData.append('alloywheelModel', selectedAlloywheelModels.map(option => option.value).join(',')); // Alloy wheel models


//     // Append car or bike brands/models based on alloywheelType
//     if (alloywheelType === 'car') {
//       formData.append('carbrand', selectedCarBrands.map(option => option.value).join(',')); // Car brands
//       formData.append('carModel', selectedCarModels.map(option => option.value).join(',')); // Car models
//     } else if (alloywheelType === 'bike') {
//       formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(',')); // Bike brands
//       formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(',')); // Bike models
//     }
//   }

//     // Append accessory data if accessory type is selected
//     if (tyreType === 'accessories') {
//       formData.append('accessoryType', accessoryType);
//       formData.append('accessoryBrand', selectedAccessoryBrands.map(option => option.value).join(','));
//       formData.append('accessoryModel', selectedAccessoryModels.map(option => option.value).join(','));
//     }

//       formData.append('width', width);
//       formData.append('height', height);
//       formData.append('customs', customs);
//       formData.append('speedRating', speedRating);
//       formData.append('loadCapacity',loadCapacity);
//       formData.append('material',material);
//       formData.append('quantity',quantity);
//       formData.append('manufactureMonth',manufactureMonth);
//       formData.append('manufactureYear',manufactureYear);
//       // formData.append('seasons', seasons.map(option => option.value).join(',')); 

//       formData.append('seasons', seasons.join(','));

//       for (let i = 0; i < image.length; i++) {
//         formData.append('image', image[i]);
//       }
//       formData.append('price', price);
//       formData.append('Salesprice', Salesprice);
//       formData.append('description', description);
//       formData.append('description1', description1);
//       formData.append('fronttyre', fronttyre);
//       formData.append('reartyre', reartyre);
//       formData.append('warranty', warranty);
//       formData.append('state', selectedStates);
//       formData.append('city', selectedCities);
//       formData.append('addresses', JSON.stringify(addresses));


//       avatarImages.forEach((file) => {
//         formData.append('avatar', file); 
//       });
    
//       thumb1Images.forEach((file) => {
//         formData.append('thumb1', file);
//       });
    
//       thumb2Images.forEach((file) => {
//         formData.append('thumb2', file); 
//       });
    
//       thumb3Images.forEach((file) => {
//         formData.append('thumb3', file); 
//       });
    
//       thumb4Images.forEach((file) => {
//         formData.append('thumb4', file); 
//       });
    
//       thumb5Images.forEach((file) => {
//         formData.append('thumb5', file); 
//       });
    
//       thumb6Images.forEach((file) => {
//         formData.append('thumb6', file); 
//       });

//       const response = await fetch(`${url.nodeapipath}/add-tyre`, {
//         method: 'POST',
//         body: formData,
//       });
      
//       const data = await response.json();
//       if (response.ok) {
//         setSuccess(data.message);
//         setError(null);
//       } else {
//         setError(data.message);
//         setSuccess(null);
//       }
//     } catch (error) {
//       setError('Error adding tyre');
//       setSuccess(null);
//     }
//   };



// //-------------------------Accessories brand and model -------------------------

// // Fetch accessory brands
// useEffect(() => {
//   const fetchAccessoryBrands = async () => {
//     try {
//       const response = await axios.get(`${url.nodeapipath}/get-accessoriesbrand`);
//       const activeBrands = response.data.filter(brand => brand.active);
//       setAccessoryBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
//     } catch (error) {
//       console.error('Error fetching accessory brands:', error);
//     }
//   };

//   fetchAccessoryBrands();
// }, []);

// // Fetch accessory models based on selected accessory brands
// useEffect(() => {
//   const fetchAccessoryModels = async () => {
//     if (selectedAccessoryBrands.length > 0) {
//       try {
//         const selectedBrandIds = selectedAccessoryBrands.map(option => option.value);
//         const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//         const response = await axios.get(`${url.nodeapipath}/get-accessoriesmodel?${query}`);
//         const activeModels = response.data.filter(model => model.active);
//         setAccessoryModels(activeModels.map(model => ({
//           value: model._id,
//           label: model.name,
//         })));
//       } catch (error) {
//         console.error('Error fetching accessory models:', error);
//       }
//     } else {
//       setAccessoryModels([]);
//     }
//   };

//   fetchAccessoryModels();
// }, [selectedAccessoryBrands]);

// // Handle accessory brand selection
// const handleAccessoryBrandsChange = (selectedOptions) => {
//   setSelectedAccessoryBrands(selectedOptions);
// };

// // Handle accessory model selection
// const handleAccessoryModelsChange = (selectedOptions) => {
//   setSelectedAccessoryModels(selectedOptions);
// };


//   //-------------------------alloy wheel brand and model ------------------------

//   useEffect(() => {
//     const fetchAlloywheelBrands = async () => {
//       try {
//         const response = await axios.get(`${url.nodeapipath}/get-alloybrand`);
//         const activeBrands = response.data.filter(brand => brand.active);
//         setAlloywheelBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
//       } catch (error) {
//         console.error('Error fetching alloy wheel brands:', error);
//       }
//     };

//     fetchAlloywheelBrands();
//   }, []);

//   // Fetch Alloy Wheel Models based on selected Alloy Wheel Brands
//   useEffect(() => {
//     const fetchAlloywheelModels = async () => {
//       if (selectedAlloywheelBrands.length > 0) {
//         try {
//           const selectedBrandIds = selectedAlloywheelBrands.map(option => option.value);
//           const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//           const response = await axios.get(`${url.nodeapipath}/get-AlloyWheelmodel?${query}`);
//           const activeModels = response.data.filter(model => model.active);
//           setAlloywheelModels(activeModels.map(model => ({
//             value: model._id,
//             label: model.name,
//           })));
//         } catch (error) {
//           console.error('Error fetching alloy wheel models:', error);
//         }
//       } else {
//         setAlloywheelModels([]);
//       }
//     };

//     fetchAlloywheelModels();
//   }, [selectedAlloywheelBrands]);

//   // Handle Alloy Wheel Brand Selection
//   const handleAlloywheelBrandsChange = (selectedOptions) => {
//     setSelectedAlloywheelBrands(selectedOptions);
//   };

//   // Handle Alloy Wheel Model Selection
//   const handleAlloywheelModelsChange = (selectedOptions) => {
//     setSelectedAlloywheelModels(selectedOptions);
//   };


// //----------------------battery brand and model --------------------------


// // Fetch Battery Brands
// useEffect(() => {
//   const fetchBatteryBrands = async () => {
//     try {
//       const response = await axios.get(`${url.nodeapipath}/get-Batterybrand`);
//       const activeBrands = response.data.filter(brand => brand.active);
//       setBatteryBrands(activeBrands.map(brand => ({ label: brand.name, value: brand._id })));
//     } catch (error) {
//       console.error('Error fetching battery brands:', error);
//     }
//   };

//   fetchBatteryBrands();
// }, []);

// // Fetch Battery Models based on selected Battery Brands
// useEffect(() => {
//   const fetchBatteryModels = async () => {
//     if (selectedBatteryBrands.length > 0) {
//       try {
//         const selectedBrandIds = selectedBatteryBrands.map(option => option.value);
//         const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//         const response = await axios.get(`${url.nodeapipath}/get-Batterymodel?${query}`);
//         const activeModels = response.data.filter(model => model.active);
//         setBatteryModels(activeModels.map(model => ({
//           value: model._id,
//           label: model.name,
//         })));
//       } catch (error) {
//         console.error('Error fetching battery models:', error);
//       }
//     } else {
//       setBatteryModels([]);
//     }
//   };

//   fetchBatteryModels();
// }, [selectedBatteryBrands]);

// // Handle Battery Brand Selection
// const handleBatteryBrandsChange = (selectedOptions) => {
//   setSelectedBatteryBrands(selectedOptions);
// };

// // Handle Battery Model Selection
// const handleBatteryModelsChange = (selectedOptions) => {
//   setSelectedBatteryModels(selectedOptions);
// };









// // -------------------- Truck Brand / Truck Model ----------------------------
  
// // Fetch truck brands
// useEffect(() => {
//   const fetchTruckBrands = async () => {
//     try {
//       const response = await axios.get(`${url.nodeapipath}/get-truckbrand`);
//       const activeTruckBrands = response.data.filter(brand => brand.active);
//       setTruckBrands(activeTruckBrands.map(brand => ({ label: brand.name, value: brand._id })));
//     } catch (error) {
//       console.error('Error fetching truck brands:', error);
//     }
//   };

//   fetchTruckBrands();
// }, []);

// // Fetch truck models based on selected truck brands
// useEffect(() => {
//   const fetchTruckModels = async () => {
//     if (selectedTruckBrands.length > 0) {
//       try {
//         const selectedBrandIds = selectedTruckBrands.map(option => option.value);
//         const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//         const response = await axios.get(`${url.nodeapipath}/get-truckmodel?${query}`);
//         const activeModels = response.data.filter(model => model.active);
//         setTruckModels(activeModels.map(model => ({
//           value: model._id,
//           label: model.name,
//         })));
//       } catch (error) {
//         console.error('Error fetching truck models:', error);
//       }
//     } else {
//       setTruckModels([]);
//     }
//   };

//   fetchTruckModels();
// }, [selectedTruckBrands]);



// // ---------------------------Tractor brand / model ----------------------------

// // Fetch tractor brands
// useEffect(() => {
//   const fetchTractorBrands = async () => {
//     try {
//       const response = await axios.get(`${url.nodeapipath}/get-tractorbrand`);
//       const activeTractorBrands = response.data.filter(brand => brand.active);
//       setTractorBrands(activeTractorBrands.map(brand => ({ label: brand.name, value: brand._id })));
//     } catch (error) {
//       console.error('Error fetching tractor brands:', error);
//     }
//   };

//   fetchTractorBrands();
// }, []);

// // Fetch tractor models based on selected tractor brands
// useEffect(() => {
//   const fetchTractorModels = async () => {
//     if (selectedTractorBrands.length > 0) {
//       try {
//         const selectedBrandIds = selectedTractorBrands.map(option => option.value);
//         const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//         const response = await axios.get(`${url.nodeapipath}/get-tractormodel?${query}`);
//         const activeModels = response.data.filter(model => model.active);
//         setTractorModels(activeModels.map(model => ({
//           value: model._id,
//           label: model.name,
//         })));
//       } catch (error) {
//         console.error('Error fetching tractor models:', error);
//       }
//     } else {
//       setTractorModels([]);
//     }
//   };

//   fetchTractorModels();
// }, [selectedTractorBrands]);

// // Handle tractor brand selection change
// const handleTractorBrandsChange = (selectedOptions) => {
//   setSelectedTractorBrands(selectedOptions);
// };

// // Handle tractor model selection change
// const handleTractorModelsChange = (selectedOptions) => {
//   setSelectedTractorModels(selectedOptions);
// };
 
// //  ------------------------------ Car Brand / car Model -----------------------


// useEffect(() => {
//   const fetchCarBrands = async () => {
//     try {
//       const response = await axios.get(`${url.nodeapipath}/get-carbrand`);
//       const activeCarBrands = response.data.filter(brand => brand.active);
//       setCarBrands(activeCarBrands.map(brand => ({ label: brand.name, value: brand._id })));
//     } catch (error) {
//       console.error('Error fetching car brands:', error);
//     }
//   };

//   fetchCarBrands();
// }, []);

// // Fetch car models based on selected car brands
// useEffect(() => {
//   const fetchCarModels = async () => {
//     if (selectedCarBrands.length > 0) {
//       try {
//         const selectedBrandIds = selectedCarBrands.map(option => option.value);
//         const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
//         console.log('Fetching models for brand IDs:', selectedBrandIds); // Debugging log

//         const response = await axios.get(`${url.nodeapipath}/get-carmodel?${query}`);
//         const activeModels = response.data.filter(model => model.active);

//         console.log('Fetched car models:', activeModels); // Debugging log
//         setCarModels(activeModels.map(model => ({
//           value: model._id,
//           label: model.name,
//         })));
//       } catch (error) {
//         console.error('Error fetching car models:', error);
//       }
//     } else {
//       setCarModels([]);
//     }
//   };

//   fetchCarModels();
// }, [selectedCarBrands]);




// // Handle car brand selection change
// const handleCarBrandsChange = (selectedOptions) => {
//   console.log('Selected car brands:', selectedOptions); // Debugging log
//   setSelectedCarBrands(selectedOptions || []);
// };

// // Handle car model selection change
// const handleCarModelsChange = (selectedOptions) => {
//   setSelectedCarModels(selectedOptions || []);
// };


// // // -------------------------- Bike Brand / Model--------------------

//   useEffect(() => {
//     const fetchBikeBrands = async () => {
//       try {
//         const response = await axios.get(`${url.nodeapipath}/get-bikebrand`);
//         const activeBikeBrands = response.data.filter(brand => brand.active);
//         setBikeBrands(activeBikeBrands.map(brand => ({ label: brand.name, value: brand._id })));
//       } catch (error) {
//         console.error('Error fetching bike brands:', error);
//       }
//     };

//     fetchBikeBrands();
//   }, []);

//   // Fetch bike models based on selected bike brands
//   useEffect(() => {
//     const fetchBikeModels = async () => {
//       if (selectedBikeBrands.length > 0) {
//         try {
//           const selectedBrandIds = selectedBikeBrands.map(option => option.value);
//           const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');

//           const response = await axios.get(`${url.nodeapipath}/get-bikemodel?${query}`);
//           const activeModels = response.data.filter(model => model.active);

//           setBikeModels(activeModels.map(model => ({
//             value: model._id,
//             label: model.name,
//           })));
//         } catch (error) {
//           console.error('Error fetching bike models:', error);
//         }
//       } else {
//         setBikeModels([]);
//       }
//     };

//     fetchBikeModels();
//   }, [selectedBikeBrands]);

//   // Handle bike brand selection change
//   const handleBikeBrandsChange = (selectedOptions) => {
//     setSelectedBikeBrands(selectedOptions);
//   };

//   // Handle bike model selection change
//   const handleBikeModelsChange = (selectedOptions) => {
//     setSelectedBikeModels(selectedOptions);
//   };





//   const modules = {
//     toolbar: [
//       [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       [{ 'script': 'sub' }, { 'script': 'super' }],
//       [{ 'indent': '-1' }, { 'indent': '+1' }],
//       [{ 'direction': 'rtl' }],
//       [{ 'size': [] }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'align': [] }],
//       ['bold', 'italic', 'underline'],
//       ['link', 'image'],
//       ['clean']  // Clear formatting option
//     ],
//   };
  
//   // Define the formats to be used in the editor
//   const formats = [
//     'header', 'font', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'align', 'bold', 'italic', 'underline', 'link', 'image'
//   ];
  
//   // Function to handle editor content changes
//   const handleEditorChange = (content) => {
//     // Set the editor content
//     setDescription1(content);
//   };
  
//   // Function to render editor content safely as HTML in your component
//   const renderDescription = () => {
//     return { __html: description1 };
//   };


// // Function to generate slug
// const generateSlug = (text) => {
//   return text
//     .toLowerCase() // Convert to lowercase
//     .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
//     .replace(/\s+/g, '-') // Replace spaces with hyphens
//     .replace(/-+/g, '-'); // Remove consecutive hyphens
// };


// // Handle input change
// const handleInputslug = (e) => {
//   const inputValue = e.target.value;
//   const slugifiedValue = generateSlug(inputValue);
//   setSlug(slugifiedValue); // Update the slug
// };

//   return (
    
// <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">

// <div className="wrapper">

//   <Sidebar/>

//   <div className="ec-page-wrapper">

//  <Navbar/>

  
//     <div className="ec-content-wrapper">
//       <div className="content">
//         <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
//           <div>
//             <h1>Add Product</h1>
//             <p className="breadcrumbs"><span><a href="#">Home</a></span>
//               <span><i className="mdi mdi-chevron-right"></i></span>Product</p>
//           </div>
//           <div>
//             <a href="/list" className="btn btn-primary"> View All
//             </a>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="card card-default">
//               <div className="card-header card-header-border-bottom">
//                 <h2>Add Product</h2>
//               </div>

//               <div className="card-body">
//                 <div className="row ec-vendor-uploads">
//                   <div className="col-lg-4">
//                     <div className="ec-vendor-img-upload">
//                       <div className="ec-vendor-main-img">
//                         <div className="avatar-upload">
                       
//   <div className="avatar-edit">
//   <input
//   type="file"
//   name="avatar"  // Updated to 'avatar'
//   multiple
//   accept=".png, .jpg, .jpeg"
//   onChange={(e) => handleImageChange(e, 'avatar')}
// />
//   <label htmlFor="imageUpload">
//     <img
//       src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//       className="svg_img header_svg"
//       alt="edit"
//     />
//   </label>
// </div>
// <div className="avatar-preview ec-preview">
//   <div className="imagePreview ec-div-preview">
//     <img
//       className="ec-image-preview"
//       src={avatarImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//       alt="preview"
//     />
//   </div>
// </div>
//   </div>



//   <div className="thumb-upload-set colo-md-12">
//   {/* Thumbnail 1 */}
//   <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input
//   type="file"
//   name="thumb1"  // Updated to 'thumb1'
//   multiple
//   accept=".png, .jpg, .jpeg"
//   onChange={(e) => handleImageChange(e, 'thumb1')}
// />
//       <label htmlFor="thumbUpload01">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb1ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>



//   <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input type="file" name="thumb2" multiple onChange={(e) => handleImageChange(e, 'thumb2')} />
//       <label htmlFor="thumbUpload02">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb2ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>




//   {/* Thumbnail 3 */}
//   <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input type="file" name="thumb3" multiple onChange={(e) => handleImageChange(e, 'thumb3')} />
//       <label htmlFor="thumbUpload03">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb3ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>


//  {/* Thumbnail 4 */}
//  <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input type="file" name="thumb4" multiple onChange={(e) => handleImageChange(e, 'thumb4')} />
//       <label htmlFor="thumbUpload04">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb4ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>

//   {/* Thumbnail 5 */}
//   <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input type="file" name="thumb5" multiple onChange={(e) => handleImageChange(e, 'thumb5')} />

//       <label htmlFor="thumbUpload05">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb5ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>


//   {/* Thumbnail 6 */}
//   <div className="thumb-upload">
//     <div className="thumb-edit">
//     <input type="file" name="thumb6" multiple onChange={(e) => handleImageChange(e, 'thumb6')} />
//       <label htmlFor="thumbUpload06">
//         <img
//           src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
//           className="svg_img header_svg"
//           alt="edit"
//         />
//       </label>
//     </div>
//     <div className="thumb-preview ec-preview">
//       <div className="image-thumb-preview">
//         <img
//           className="ec-image-preview"
//           src={thumb6ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
//           alt="preview"
//         />
//       </div>
//     </div>
//   </div>
//          </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-8">
//                     <div className="ec-vendor-upload-detail">
//                       <form onSubmit={handleSubmit} className="row g-3">
//                         <div className="col-md-12">
//                           <label for="inputEmail4" className="form-label">Product name</label>
//                           <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control slug-title" id="inputEmail4"/>
                                              
//                         </div>


// <div className="col-md-12">
//       <label htmlFor="slug" className="col-12 col-form-label">Slug</label>
//       <div className="col-12">
//         <input
//           id="slug"
//           name="slug"
//           className="form-control here set-slug"
//           type="text"
//           value={slug}
//           onChange={handleInputslug}
//         />
//       </div>
//     </div>


//                         <div className="col-md-12">
//                           <label className="form-label">Sort Description</label>
//                           <textarea  value={description} onChange={(event) => setDescription(event.target.value)} className="form-control" rows="2"></textarea>
//                         </div>

//                         <div className="form-group row">
//                             <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
//                             <div className="col-12">
//                             <Select
//                       id="tyreBrand"
//                       name="tyreBrand"
//                       value={selectedTyreBrand}
//                       onChange={handleSelectChange}
//                       options={activeTyreBrands.map(brand => ({
//                         value: brand._id, // ID for form data
//                         label: brand.name // Name for display
//                       }))}
//                       className="form-input"
//                       isMulti
//                     />
//                             </div>
//                           </div>



//                           <hr/>



// <div className="col-md-12 mt-5 mb-25">
//   <label className="form-label">Vehicle Type</label>
//   <div className="form-checkbox-box">
//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="car"
//         name="tyreType"
//         checked={tyreType === 'car'}
//         onChange={(event) => setTyreType(event.target.value)}
//       />
//       <label>Car</label>
//     </div>

//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="bike"
//         name="tyreType"
//         checked={tyreType === 'bike'}
//         onChange={(event) => setTyreType(event.target.value)}
//       />
//       <label>Bike</label>
//     </div>

//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="truck"
//         name="tyreType"
//         checked={tyreType === 'truck'}
//         onChange={(event) => setTyreType(event.target.value)}
//       />
//       <label>Truck</label>
//     </div>

//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="tractor"
//         name="tyreType"
//         checked={tyreType === 'tractor'}
//         onChange={(event) => setTyreType(event.target.value)}
//       />
//       <label>Tractor</label>
//     </div>

//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="battery"
//         name="tyreType"
//         checked={tyreType === 'battery'}
//         onChange={(event) => setTyreType(event.target.value)}
//       />
//       <label>Battery</label>
//     </div>

//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="alloywheel" // New value for alloy wheel
//         name="tyreType"
//         checked={tyreType === 'alloywheel'} // Check if the selected type is alloy wheel
//         onChange={(event) => setTyreType(event.target.value)} // Update state on change
//       />
//       <label>Alloy Wheel</label> 
//     </div>
//     <div className="form-check form-check-inline">
//       <input
//         type="radio"
//         value="accessories" // New value for accessories
//         name="tyreType"
//         checked={tyreType === 'accessories'} // Check if the selected type is accessories
//         onChange={(event) => setTyreType(event.target.value)} // Update state on change
//       />
//       <label>Accessories</label> 
//     </div>
//   </div>
// </div>



// {tyreType === 'car' && (
//   <>


// <div>
// <div className="col-md-12">
// <label className="form-label">Car Brand</label>
// <Select
//   isMulti
//   options={carBrands}
//   value={selectedCarBrands}
//   onChange={handleCarBrandsChange}
//   className="form-input"
// />

// <br/>

// <div className="col-md-12">
//   <label className="form-label">Car Models </label>
//   <Select
//     isMulti
//     options={carModels}
//     value={selectedCarModels}
//     onChange={handleCarModelsChange}
//     className="form-input"
//   />
// </div>

// <br/>
// </div>
// </div>   

//  </>
//   )}


// {tyreType === 'bike' && (
//  <>
                  
// <div className="col-md-12">
// <label className="form-label">Bike Brand</label>
// <Select
//   isMulti
//   options={bikeBrands}
//   value={selectedBikeBrands}
//   onChange={handleBikeBrandsChange}
//   className="form-input"
// />

// <br/>

// <div className="col-md-12">
//   <label className="form-label">
//     Bike Models 
//   </label>
//   <Select
//     isMulti
//     options={bikeModels}
//     value={selectedBikeModels}
//     onChange={handleBikeModelsChange}
//     className="form-input"
//   />
// </div>

// <br/>
// </div>



// <div className="col-md-12 mt-5 mb-25">
// <label className="form-label">Tyre Type</label>
// <div className="form-checkbox-box">
// <div className="form-check form-check-inline">
// <input
// type="radio"
// value="Front Tyre"  // Set the value as "Front Tyre"
// onChange={(event) => setFronttyre(event.target.value)}  // Set the selected value in state
// checked={fronttyre === "Front Tyre"}  // Ensure the radio button is selected based on state
// className="form-input"
// />
// <label>Front Tyre</label>
// </div>
// <div className="form-check form-check-inline">
// <input
// type="radio"
// value="Rear Tyre"  // Set the value as "Rear Tyre"
// onChange={(event) => setRearTyre(event.target.value)}  // Set the selected value in state
// checked={reartyre === "Rear Tyre"}  // Ensure the radio button is selected based on state
// className="form-input"
// />
// <label>Rear Tyre</label>
// </div>
// </div>
// </div>


// </>
// )}  


// {tyreType === 'truck' && (
//   <div>
//     <div className="col-md-12">
//       <label className="form-label">Truck Brand</label>
//       <Select
// isMulti
// options={truckBrands} // Assuming truckBrands is an array of options
// value={selectedTruckBrands} // State for selected truck brands
// onChange={setSelectedTruckBrands} // Function to update state
// className="form-input"
// />
//     </div>
//     <br/>

//     <div className="col-md-12">
//       <label className="form-label">Truck Model</label>
      
      
// <Select
// isMulti
// options={truckModels} // Assuming truckModels is an array of options
// value={selectedTruckModels} // State for selected truck models
// onChange={setSelectedTruckModels} // Function to update state
// className="form-input"
// />
//     </div>

//     <br/>
//   </div>
// )}


// {tyreType === 'tractor' && (
//       <div>
//         <div className="col-md-12">
//            <label className="form-label">Tractor Brand</label>
//        <Select
//         isMulti
//           options={tractorBrands}
//             value={selectedTractorBrands}
//              onChange={handleTractorBrandsChange}
//              className="form-input"
//               />
// </div>
// <br/>
// <div className="col-md-12">
// <label className="form-label">Tractor Model</label>
// <Select
// isMulti
// options={tractorModels}
// value={selectedTractorModels}
// onChange={handleTractorModelsChange}
// className="form-input"
// />
// </div>
// <br/>
// </div>
// )}                

// {tyreType === 'battery' && (
//   <>
//     <div className="col-md-12 mt-3 mb-3">
//       <label className="form-label">Battery Type</label>
//       <div className="form-checkbox-box">
//         <div className="form-check form-check-inline">
//           <input
//             type="radio"
//             value="car"
//             name="batteryType"
//             checked={batteryType === 'car'}
//             onChange={(e) => setBatteryType(e.target.value)}
//             className="form-input"
//           />
//           <label>Car Battery</label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             type="radio"
//             value="bike"
//             name="batteryType"
//             checked={batteryType === 'bike'}
//             onChange={(e) => setBatteryType(e.target.value)}
//             className="form-input"
//           />
//           <label>Bike Battery</label>
//         </div>
//       </div>
//     </div>

 

 
//           <div className="col-md-12">
//             <label className="form-label">Battery Brand</label>
//             <Select
//               isMulti
//               options={batteryBrands}
//               value={selectedBatteryBrands}
//               onChange={handleBatteryBrandsChange}
//               className="form-input"
//             />
//           </div>
//           <br />
//           <div className="col-md-12">
//             <label className="form-label">Battery Models</label>
//             <Select
//               isMulti
//               options={batteryModels}
//               value={selectedBatteryModels}
//               onChange={handleBatteryModelsChange}
//               className="form-input"
//             />
//           </div>


//         <br/>
        
 


//     {batteryType === 'car' && (
//       <>
//         <div className="col-md-12">
//           <label className="form-label">Car Brand</label>
//           <Select
//             isMulti
//             options={carBrands}
//             value={selectedCarBrands}
//             onChange={handleCarBrandsChange}
//             className="form-input"
//           />
//         </div>
//         <br />
//         <div className="col-md-12">
//           <label className="form-label">Car Models</label>
//           <Select
//             isMulti
//             options={carModels}
//             value={selectedCarModels}
//             onChange={handleCarModelsChange}
//             className="form-input"
//           />
//         </div>
//         <br />
//       </>
//     )}

//     {batteryType === 'bike' && (
//       <>
//         <div className="col-md-12">
//           <label className="form-label">Bike Brand</label>
//           <Select
//             isMulti
//             options={bikeBrands}
//             value={selectedBikeBrands}
//             onChange={handleBikeBrandsChange}
//             className="form-input"
//           />
//         </div>
//         <br />
//         <div className="col-md-12">
//           <label className="form-label">Bike Models</label>
//           <Select
//             isMulti
//             options={bikeModels}
//             value={selectedBikeModels}
//             onChange={handleBikeModelsChange}
//             className="form-input"
//           />
//         </div>
//         <br />
//       </>
//     )}
//   </>
// )}

// {tyreType === 'alloywheel' && (
//         <>
//           <div className="col-md-12 mt-3 mb-3">
//             <label className="form-label">Alloy Wheel Type</label>
//             <div className="form-checkbox-box">
//               <div className="form-check form-check-inline">
//                 <input
//                   type="radio"
//                   value="car"
//                   name="alloywheelType"
//                   checked={alloywheelType === 'car'}
//                   onChange={(e) => setAlloywheelType(e.target.value)}
//                   className="form-input"
//                 />
//                 <label>Car Alloy Wheel</label>
//               </div>
//               <div className="form-check form-check-inline">
//                 <input
//                   type="radio"
//                   value="bike"
//                   name="alloywheelType"
//                   checked={alloywheelType === 'bike'}
//                   onChange={(e) => setAlloywheelType(e.target.value)}
//                   className="form-input"
//                 />
//                 <label>Bike Alloy Wheel</label>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-12">
//             <label className="form-label">Alloy Wheel Brand</label>
//             <Select
//               isMulti
//               options={alloywheelBrands}
//               value={selectedAlloywheelBrands}
//               onChange={handleAlloywheelBrandsChange}
//               className="form-input"
//             />
//           </div>
//           <br />
//           <div className="col-md-12">
//             <label className="form-label">Alloy Wheel Models</label>
//             <Select
//               isMulti
//               options={alloywheelModels}
//               value={selectedAlloywheelModels}
//               onChange={handleAlloywheelModelsChange}
//               className="form-input"
//             />
//           </div>
//           <br />

//           {alloywheelType === 'car' && (
//             <>
//               <div className="col-md-12">
//                 <label className="form-label">Car Brand</label>
//                 <Select
//                   isMulti
//                   options={carBrands} // Assuming you have an array of car brands
//                   value={selectedCarBrands}
//                   onChange={handleCarBrandsChange}
//                   className="form-input"
//                 />
//               </div>
//               <br />
//               <div className="col-md-12">
//                 <label className="form-label">Car Models</label>
//                 <Select
//                   isMulti
//                   options={carModels} // Assuming you have an array of car models
//                   value={selectedCarModels}
//                   onChange={handleCarModelsChange}
//                   className="form-input"
//                 />
//               </div>
//               <br />
//             </>
//           )}

//           {alloywheelType === 'bike' && (
//             <>
//               <div className="col-md-12">
//                 <label className="form-label">Bike Brand</label>
//                 <Select
//                   isMulti
//                   options={bikeBrands} // Assuming you have an array of bike brands
//                   value={selectedBikeBrands}
//                   onChange={handleBikeBrandsChange}
//                   className="form-input"
//                 />
//               </div>
//               <br />
//               <div className="col-md-12">
//                 <label className="form-label">Bike Models</label>
//                 <Select
//                   isMulti
//                   options={bikeModels} // Assuming you have an array of bike models
//                   value={selectedBikeModels}
//                   onChange={handleBikeModelsChange}
//                   className="form-input"
//                 />
//               </div>
//               <br />
//             </>
//           )}
//         </>
//       )}


// {tyreType === 'accessories' && (
//                                 <>
//                                   <div className="col-md-12 mt-3 mb-3">
//                                     <label className="form-label">Accessory Type</label>
//                                     <div className="form-checkbox-box">
//                                       <div className="form-check form-check-inline">
//                                         <input
//                                           type="radio"
//                                           value="car"
//                                           name="accessoryType"
//                                           checked={accessoryType === 'car'}
//                                           onChange={(e) => setAccessoryType(e.target.value)}
//                                           className="form-input"
//                                         />
//                                         <label>Car Accessories</label>
//                                       </div>
//                                       <div className="form-check form-check-inline">
//                                         <input
//                                           type="radio"
//                                           value="bike"
//                                           name="accessoryType"
//                                           checked={accessoryType === 'bike'}
//                                           onChange={(e) => setAccessoryType(e.target.value)}
//                                           className="form-input"
//                                         />
//                                         <label>Bike Accessories</label>
//                                       </div>
//                                     </div>
//                                   </div>

//                                   {/* Accessory Brand and Model Selection */}
//                                   {accessoryType && (
//                                     <>
//                                       <div className="col-md-12">
//                                       <label className="form-label">Accessories Brand</label>
//                                         <Select
//                                           isMulti
//                                           options={accessoryBrands} // Assuming you have an array of accessory brands
//                                           value={selectedAccessoryBrands}
//                                           onChange={handleAccessoryBrandsChange}
//                                           className="form-input"
//                                         />
//                                       </div>
//                                       <br />
//                                       <div className="col-md-12">
//                                         <label className="form-label">Accessories Model</label>
//                                         <Select
//                                           isMulti
//                                           options={accessoryModels} // Assuming you have an array of accessory models
//                                           value={selectedAccessoryModels}
//                                           onChange={handleAccessoryModelsChange}
//                                           className="form-input"
//                                         />
//                                       </div>
//                                       <br />
//                                     </>
//                                   )}
//                                 </>
//                               )}



//               <hr/>
//                         <div className="col-md-4">
//                           <label className="form-label">Warranty</label>    
//                             <select  name="categories" id="Categories" value={warranty} onChange={(event) => setWarranty(event.target.value)} className="form-select">
//                             <option value="">Select Warranty Period</option>
//                             {warrantyOptions.map((option, index) => (
//                             <option key={index} value={option}>
//                                {option}
//                                  </option>
//                                 ))}
//                               </select>
//                         </div>



// {/* <div className="col-md-4">
//   <label className="form-label">
//     {tyreType === 'battery' ? 'Battery Capacity' : 
//      tyreType === 'alloywheel' ? 'Wheel Size' : 
//      'Speed Rating'}
//   </label>
//   <select
//     name="categories"
//     id="Categories"
//     value={
//       tyreType === 'battery' ? batteryCapacity :
//       tyreType === 'alloywheel' ? WheelSize : 
//       speedRating
//     }
//     onChange={(event) => {
//       if (tyreType === 'battery') {
//         setBatteryCapacity(event.target.value);
//       } else if (tyreType === 'alloywheel') {
//         setWheelSize(event.target.value);
//       } else {
//         setspeedRating(event.target.value);
//       }
//     }}
//     className="form-select"
//   >
//     <option value="">
//       {tyreType === 'battery' ? 'Select Battery Capacity' : 
//        tyreType === 'alloywheel' ? 'Select Wheel Size' : 
//        'Select Speed Rating'}
//     </option>
//     {(tyreType === 'battery' ? batteryCapacityOptions : 
//       tyreType === 'alloywheel' ? wheelSizeOptions : 
//       SpeedRating1).map((item, index) => (
//       <option key={index} value={item}>
//         {item}
//       </option>
//     ))}
//   </select>
// </div> */}


// {tyreType !== 'accessories' && (
//   <div className="col-md-4">
//     <label className="form-label">
//       {tyreType === 'battery' ? 'Battery Capacity' : 
//        tyreType === 'alloywheel' ? 'Wheel Size' : 
//        'Speed Rating'}
//     </label>
//     <select
//       name="categories"
//       id="Categories"
//       value={
//         tyreType === 'battery' ? batteryCapacity :
//         tyreType === 'alloywheel' ? WheelSize : 
//         speedRating
//       }
//       onChange={(event) => {
//         if (tyreType === 'battery') {
//           setBatteryCapacity(event.target.value);
//         } else if (tyreType === 'alloywheel') {
//           setWheelSize(event.target.value);
//         } else {
//           setspeedRating(event.target.value);
//         }
//       }}
//       className="form-select"
//     >
//       <option value="">
//         {tyreType === 'battery' ? 'Select Battery Capacity' : 
//          tyreType === 'alloywheel' ? 'Select Wheel Size' : 
//          'Select Speed Rating'}
//       </option>
//       {(tyreType === 'battery' ? batteryCapacityOptions : 
//         tyreType === 'alloywheel' ? wheelSizeOptions : 
//         SpeedRating1).map((item, index) => (
//         <option key={index} value={item}>
//           {item}
//         </option>
//       ))}
//     </select>
//   </div>
// )}




// {/* 
// <div className="col-md-4">
//   <label className="form-label">
//     {tyreType === 'battery' ? 'Voltage' : 
//      tyreType === 'alloywheel' ? 'Color' : 
//      'Load Capacity'}
//   </label>
//   <select
//     name="categories"
//     id="Categories"
//     value={
//       tyreType === 'battery' ? voltage : 
//       tyreType === 'alloywheel' ? Color : 
//       loadCapacity
//     }
//     onChange={(event) => {
//       if (tyreType === 'battery') {
//         setVoltage(event.target.value);
//       } else if (tyreType === 'alloywheel') {
//         setColor(event.target.value);
//       } else {
//         setloadCapacity(event.target.value);
//       }
//     }}
//     className="form-input"
//   >
//     <option value="">
//       {tyreType === 'battery' ? 'Select Voltage' : 
//        tyreType === 'alloywheel' ? 'Select Color' : 
//        'Select Load Capacity'}
//     </option>
//     {(tyreType === 'battery' ? voltageOptions : 
//       tyreType === 'alloywheel' ? colorOptions : 
//       LoadCapacity1).map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ))}
//   </select>
// </div> */}

// {tyreType !== 'accessories' && (
//   <div className="col-md-4">
//     <label className="form-label">
//       {tyreType === 'battery' ? 'Voltage' : 
//        tyreType === 'alloywheel' ? 'Color' : 
//        'Load Capacity'}
//     </label>
//     <select
//       name="categories"
//       id="Categories"
//       value={
//         tyreType === 'battery' ? voltage : 
//         tyreType === 'alloywheel' ? Color : 
//         loadCapacity
//       }
//       onChange={(event) => {
//         if (tyreType === 'battery') {
//           setVoltage(event.target.value);
//         } else if (tyreType === 'alloywheel') {
//           setColor(event.target.value);
//         } else {
//           setloadCapacity(event.target.value);
//         }
//       }}
//       className="form-input"
//     >
//       <option value="">
//         {tyreType === 'battery' ? 'Select Voltage' : 
//          tyreType === 'alloywheel' ? 'Select Color' : 
//          'Select Load Capacity'}
//       </option>
//       {(tyreType === 'battery' ? voltageOptions : 
//         tyreType === 'alloywheel' ? colorOptions : 
//         LoadCapacity1).map((option, index) => (
//         <option key={index} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </div>
// )}


// {/* 
// {tyreType !== 'battery' && (
//   <div className="col-md-4">
//     <label className="form-label">Material</label>
//     <select name="categories" id="Categories" value={material} onChange={(event) => setMaterial(event.target.value)} className="form-input">
//       <option value="">Material</option>
//       {Material.map((material, index) => (
//         <option key={index} value={material}>
//           {material}
//         </option>
//       ))}
//     </select>
//   </div>
// )} */}


// {tyreType !== 'battery' && tyreType !== 'accessories' && (
//   <div className="col-md-4">
//     <label className="form-label">Material</label>
//     <select
//       name="categories"
//       id="Categories"
//       value={material}
//       onChange={(event) => setMaterial(event.target.value)}
//       className="form-input"
//     >
//       <option value="">Material</option>
//       {Material.map((material, index) => (
//         <option key={index} value={material}>
//           {material}
//         </option>
//       ))}
//     </select>
//   </div>
// )}




// {/* 
// <div className="col-md-3">
//   <label className="form-label">
//     {tyreType === 'battery' ? 'Battery Width' : 
//      tyreType === 'alloywheel' ? 'Holes' : 
//      'Width'}
//   </label>
//   <select
//     name="categories"
//     id="Categories"
//     value={
//       tyreType === 'battery' ? batteryWidth : 
//       tyreType === 'alloywheel' ? Holes : 
//       width
//     }
//     onChange={(event) => {
//       if (tyreType === 'battery') {
//         setBatteryWidth(event.target.value);
//       } else if (tyreType === 'alloywheel') {
//         setHoles(event.target.value);
//       } else {
//         setWidth(event.target.value);
//       }
//     }}
//     className="form-input"
//   >
//     <option value="">
//       {tyreType === 'battery' ? 'Select Battery Width' : 
//        tyreType === 'alloywheel' ? 'Select Holes' : 
//        'Select Width'}
//     </option>
//     {(tyreType === 'battery' ? batteryWidthOptions : 
//       tyreType === 'car' ? widthOptions : 
//       tyreType === 'alloywheel' ? holesOptions : 
//       widthOptions1).map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ))}
//   </select>
// </div> */}


// {tyreType !== 'accessories' && (
//   <div className="col-md-3">
//     <label className="form-label">
//       {tyreType === 'battery' ? 'Battery Weight' : 
//        tyreType === 'alloywheel' ? 'Holes' : 
//        'Width'}
//     </label>
//     <select
//       name="categories"
//       id="Categories"
//       value={
//         tyreType === 'battery' ? batteryWeight : 
//         tyreType === 'alloywheel' ? Holes : 
//         width
//       }
//       onChange={(event) => {
//         if (tyreType === 'battery') {
//           setBatteryWeight(event.target.value);
//         } else if (tyreType === 'alloywheel') {
//           setHoles(event.target.value);
//         } else {
//           setWidth(event.target.value);
//         }
//       }}
//       className="form-input"
//     >
//       <option value="">
//         {tyreType === 'battery' ? 'Select Battery Weight' : 
//          tyreType === 'alloywheel' ? 'Select Holes' : 
//          'Select Weight'}
//       </option>
//       {(tyreType === 'battery' ? batteryWeightOptions : 
//         tyreType === 'car' ? widthOptions : 
//         tyreType === 'alloywheel' ? holesOptions : 
//         widthOptions1).map((option, index) => (
//         <option key={index} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </div>
// )}



// {/* 
// <div className="col-md-3">
//   <label className="form-label">
//     {tyreType === 'battery' ? 'Battery Height' : 
//      tyreType === 'alloywheel' ? 'PCD' : 
//      'Height'}
//   </label>
//   <select
//     name="categories"
//     id="Categories"
//     value={
//       tyreType === 'battery' ? batteryHeight : 
//       tyreType === 'alloywheel' ? PCD : 
//       height
//     }
//     onChange={(event) => {
//       if (tyreType === 'battery') {
//         setBatteryHeight(event.target.value);
//       } else if (tyreType === 'alloywheel') {
//         setPCD(event.target.value);
//       } else {
//         setHeight(event.target.value);
//       }
//     }}
//     className="form-input"
//   >
//     <option value="">
//       {tyreType === 'battery' ? 'Select Battery Height' : 
//        tyreType === 'alloywheel' ? 'Select PCD' : 
//        'Select Height'}
//     </option>
//     {(tyreType === 'battery' ? batteryHeightOptions : 
//       tyreType === 'car' ? heightOptions : 
//       tyreType === 'alloywheel' ? pcdOptions : 
//       heightOptions1).map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ))}
//   </select>
// </div> */}


// {tyreType !== 'accessories' && (
//   <div className="col-md-3">
//     <label className="form-label">
//       {tyreType === 'battery' ? 'Battery Height' : 
//        tyreType === 'alloywheel' ? 'PCD' : 
//        'Height'}
//     </label>
//     <select
//       name="categories"
//       id="Categories"
//       value={
//         tyreType === 'battery' ? batteryHeight : 
//         tyreType === 'alloywheel' ? PCD : 
//         height
//       }
//       onChange={(event) => {
//         if (tyreType === 'battery') {
//           setBatteryHeight(event.target.value);
//         } else if (tyreType === 'alloywheel') {
//           setPCD(event.target.value);
//         } else {
//           setHeight(event.target.value);
//         }
//       }}
//       className="form-input"
//     >
//       <option value="">
//         {tyreType === 'battery' ? 'Select Battery Height' : 
//          tyreType === 'alloywheel' ? 'Select PCD' : 
//          'Select Height'}
//       </option>
//       {(tyreType === 'battery' ? batteryHeightOptions : 
//         tyreType === 'car' ? heightOptions : 
//         tyreType === 'alloywheel' ? pcdOptions : 
//         heightOptions1).map((option, index) => (
//         <option key={index} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </div>
// )}






// {/* {tyreType !== 'battery' && tyreType !== 'alloywheel' && (
//   <div className="col-md-3">
//     <label className="form-label">Customs</label>
//     <select
//       name="categories"
//       id="Categories"
//       value={customs}
//       onChange={(event) => setCustoms(event.target.value)}
//       className="form-input"
//     >
//       <option value="">Custom</option>
//       {/* Conditionally render the customs options based on the selected vehicle type 
//       {(tyreType === 'car' ? customsOptions : customsOptions1).map((custom, index) => (
//         <option key={index} value={custom}>
//           {custom}
//         </option>
//       ))}
//     </select>
//   </div>
// )} */}


// {tyreType !== 'battery' && tyreType !== 'alloywheel' && tyreType !== 'accessories' && (
//   <div className="col-md-3">
//     <label className="form-label">Customs</label>
//     <select
//       name="categories"
//       id="Categories"
//       value={customs}
//       onChange={(event) => setCustoms(event.target.value)}
//       className="form-input"
//     >
//       <option value="">Custom</option>
//       {/* Conditionally render the customs options based on the selected vehicle type */}
//       {(tyreType === 'car' ? customsOptions : customsOptions1).map((custom, index) => (
//         <option key={index} value={custom}>
//           {custom}
//         </option>
//       ))}
//     </select>
//   </div>
// )}



// {tyreType !== 'battery' && tyreType !== 'accessories' && (
//   <div className="col-md-5 mb-25">
//     <label className="form-label">Seasons</label>
//     <div className="form-checkbox-box">
//       <div className="form-check form-check-inline">
//         <input
//           type="checkbox"
//           name="seasons"
//           value="Winter"
//           checked={seasons.includes("Winter")}
//           onChange={(event) => {
//             if (event.target.checked) {
//               setSeasons([...seasons, event.target.value]);
//             } else {
//               setSeasons(seasons.filter((season) => season !== event.target.value));
//             }
//           }}
//         />
//         <label>Winter</label>
//       </div>
//       <div className="form-check form-check-inline">
//         <input
//           type="checkbox"
//           name="seasons"
//           value="Summer"
//           checked={seasons.includes("Summer")}
//           onChange={(event) => {
//             if (event.target.checked) {
//               setSeasons([...seasons, event.target.value]);
//             } else {
//               setSeasons(seasons.filter((season) => season !== event.target.value));
//             }
//           }}
//         />
//         <label>Summer</label>
//       </div>
//     </div>
//   </div>
// )}



//                         <div className="col-md-5">
//                           <label className="form-label">Price <span>( In INR
//                               )</span></label>
//                               <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} className="form-select" />
//                         </div>

//                         <div className="col-md-5">
//                           <label className="form-label">Sale Price <span>( In INR
//                             )</span></label>
//                            <input type="number" value={Salesprice} onChange={(event) => setSalesprice(event.target.value)} className="form-select" />
//                         </div>
//                         <div className="col-md-2">
//                           <label className="form-label">Quantity</label>
//                           <select name="categories" id="Categories" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="form-input">
//                         <option value="number">Quantity</option>
//                         {Quantity.map((quantity, index) => (
//                           <option key={index} value={quantity}>
//                             {quantity}
//                           </option>
//                         ))}
//                       </select>
//                         </div>

//                         <div className="col-md-5">
//                           <label className="form-label">Manufacture Month
//                               </label>
//                               <select value={manufactureMonth} onChange={(event) => setManufactureMonth(event.target.value)} className="form-input">
//                           <option value="">Select Month</option>
//                           {monthOptions.map((month, index) => (
//                             <option key={index} value={month}>
//                               {month}
//                             </option>
//                           ))}
//                         </select>
//                         </div>


//                         <div className="col-md-5">
//                           <label className="form-label">Manufacture Year   </label>
//                           <select value={manufactureYear} onChange={(event) => setManufactureYear(event.target.value)} className="form-input">
//                           <option value="">Select Year</option>
//                           {yearOptions.map((year, index) => (
//                             <option key={index} value={year}>
//                               {year}
//                             </option>
//                           ))}
//                         </select>
//                         </div>

    
                      
                      
//                       <hr/> 
//                       <br/>


//     <div>
//       <label>
//         Description:
//         <ReactQuill
//           value={description1}
//           onChange={handleEditorChange}
//           modules={modules}
//           formats={formats}
//           className="form-input" // You can style this with your own CSS
//           placeholder="Write something awesome..."
//         />
    
//       </label>    
//       <br />
//     </div>




//     {addresses.map((address, index) => (
//         <div key={index} className="address-section">
//           <label>
//             State:
//             <select
//               value={address.state}
//               onChange={(e) => handleStateChange(index, e.target.value)}
//             >
//               <option value="">Select State</option>
//               {Object.keys(stateCityData).map((state) => (
//                 <option key={state} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label>
//             City:
//             <select
//               value={address.city}
//               onChange={(e) => handleCityChange(index, e.target.value)}
//               disabled={!address.state}
//             >
//               <option value="">Select City</option>
//               {cities.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </label>


// <label>
//   Pincode:
//   <input
//     type="text"
//     name="pinCode"
//     value={addresses[index].pinCode}  // Use the address-specific pinCode
//     onChange={(e) => handleInputChange(index, 'pinCode', e.target.value)}  // Update pinCode in addresses array
//     placeholder="Pincode"
    
//   />
// </label>


// <label>
//   Addresses:
//   <textarea
//     value={address.details}
//     onChange={(e) => handleInputChange(index, 'details', e.target.value)}
//     placeholder="Enter address details"
//   />
// </label>

//           <button type="button" className='btn btn-danger' onClick={() => removeAddress(index)}>Delete</button> 
//           <button type="button"  className="btn btn-success m-3"  onClick={addAddress}>Add</button>
//         </div>
//       ))}

//                         <div className="col-md-12">
//                         {error && <p className="error-message1">{error}</p>}
//                         {success && <p className="success-message1">{success}</p>}
//                           <button type="submit" className="btn btn-primary">Submit</button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>

//     <Footer/>

//   </div> 
// </div> 

// </body>
//   );
// };

// export default AddTyreForm;










import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // or 'quill.bubble.css', depending on the theme
import { useNavigate } from 'react-router-dom';


import url from "../../env.js"


 const AddTyreForm = () => {
  




  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user navigated directly to this page
    if (document.referrer === '') {
        // If the referrer is empty, redirect to home or another page
        navigate('/');
    }
}, [navigate]);


const [batteryType, setBatteryType] = useState('');

  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  // const [tyreType, setTyreType] = useState('');
  const [tyreModel, setTyreModel] = useState([]);
  const [width, setWidth] = useState([]);
  const [height, setHeight] = useState([]);
  const [customs, setCustoms] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [speedRating, setspeedRating] = useState([]);
  const [loadCapacity, setloadCapacity] = useState([]);
  const [material, setMaterial] = useState([]);
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
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
  const [quantity, setQuantity] = useState('');
  const [tyreBrands, setTyreBrands] = useState([]);
  const [selectedTyreBrand, setSelectedTyreBrand] = useState([]);
const [tyreType, setTyreType] = useState(''); // Radio button state: car or bike tyres
const [selectedCarModels, setSelectedCarModels] = useState([]);
const [carBrands, setCarBrands] = useState([]);
const [carModels, setCarModels] = useState([]);
const [selectedCarBrands, setSelectedCarBrands] = useState([]); // Supports multiple selections
const [bikeBrands, setBikeBrands] = useState([]);
const [bikeModels, setBikeModels] = useState([]);
const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
const [selectedBikeModels, setSelectedBikeModels] = useState([]);
const [selectedStates, setSelectedStates] = useState([]);
const [selectedCities, setSelectedCities] = useState([]);
const [formData , setFormData] = useState([])
const [cities, setCities] = useState([]);
const [avatarImages, setAvatarImages] = useState([]);
const [avatarImageUrls, setAvatarImageUrls] = useState([]); 
const [thumb1Images, setThumb1Images] = useState([]);
const [thumb1ImageUrls, setThumb1ImageUrls] = useState([]);
const [thumb2Images, setThumb2Images] = useState([]);
const [thumb2ImageUrls, setThumb2ImageUrls] = useState([]);
const [thumb3Images, setThumb3Images] = useState([]);
const [thumb3ImageUrls, setThumb3ImageUrls] = useState([]);
const [thumb4Images, setThumb4Images] = useState([]);
const [thumb4ImageUrls, setThumb4ImageUrls] = useState([]);
const [thumb5Images, setThumb5Images] = useState([]);
const [thumb5ImageUrls, setThumb5ImageUrls] = useState([]);
const [thumb6Images, setThumb6Images] = useState([]);
const [thumb6ImageUrls, setThumb6ImageUrls] = useState([]);

// Battery


const [batteryBrands, setBatteryBrands] = useState([]);
  const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
  const [batteryModels, setBatteryModels] = useState([]);
  const [selectedBatteryModels, setSelectedBatteryModels] = useState([]);

  const [batteryWeight, setBatteryWeight] = useState('');
    const [batteryHeight, setBatteryHeight] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [voltage, setVoltage] = useState('');

//truck
const [truckBrands, setTruckBrands] = useState([]);
const [selectedTruckBrands, setSelectedTruckBrands] = useState([]);
const [truckModels, setTruckModels] = useState([]);
const [selectedTruckModels, setSelectedTruckModels] = useState([]);


// Add a state for tractor brands and models
const [tractorBrands, setTractorBrands] = useState([]);
const [selectedTractorBrands, setSelectedTractorBrands] = useState([]);
const [tractorModels, setTractorModels] = useState([]);
const [selectedTractorModels, setSelectedTractorModels] = useState([]);


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



const [slug, setSlug] = useState("");

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
    updatedAddresses[index].city = ''; // Reset city when state changes
    setAddresses(updatedAddresses);
    setCities(stateCityData[state] || []);
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




  // -------------- Tyre Brand --------------------------------


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

  
  // List of months and years
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearOptions = Array.from({ length: 20 }, (v, k) => (new Date().getFullYear() - k).toString());

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
const pcdOptions = ['98mm', '100mm', '108mm', '110mm', '112mm', '114.3mm', '115mm', '120mm', '127mm', '130mm', '139.7mm', '160mm','180mm'];


//car
  const widthOptions = [31,33,35,37,115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
  const heightOptions = [35,40,45,50,55,60,65,70,75,80];
  const  customsOptions= [15,16,17,19];

//bike
  const widthOptions1 = [2.50 ,2.75,3.00,3.25,3.50,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,240,260];
  const heightOptions1 = [60,65,70,75,80,90,100,600,605];
  const customsOptions1 = [10,11,12,13,14,15,16,17,18,19,21,23];


  const SpeedRating1= ['Q : up to 160 km/h', 'R: up to 170 km/h',' S:up to 180 km/h', "T: up to 190 km/h" , " H: up to 210 km/h ", " V: up to 240 km/h"];
  const LoadCapacity1 = [47, 52, 54, 58, 62, 65, 69, 73, 82, 85, 88, 91, 94, 95, 98, 99, 100, 104, 108] 
  const Quantity = [1,2,3,4,5,6,7,8,9,10];
  const Material = ["Steel","Nylon"];
  const warrantyOptions = ['1 year','2 years','3 years','4 years','5 years','6 years','7 years','8 years','9 years','10 years',
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('slug', slug);
      formData.append('title', title);
      formData.append('tyreType', tyreType);
      formData.set('tyreBrand', selectedTyreBrand.map(option => option.value).join(','));
      formData.append('carbrand', selectedCarBrands.map(option => option.value).join(','));       
      formData.append('carModel', selectedCarModels.map(option => option.value).join(','));
      formData.append('bikeBrand',selectedBikeBrands.map(option => option.value).join(','));
      formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(','));

      formData.append('truckBrand', selectedTruckBrands.map(option => option.value).join(',')); // Truck Brand
      formData.append('truckModel', selectedTruckModels.map(option => option.value).join(',')); // Truck Model
  
// Add tractor brand and model
formData.append('tractorBrand', selectedTractorBrands.map(option => option.value).join(',')); // Tractor Brand
formData.append('tractorModel', selectedTractorModels.map(option => option.value).join(',')); // Tractor Model

//Battery
// Append car and bike brands/models based on tyreType
if (tyreType === 'battery') {
  formData.append('batteryType', batteryType); // car or bike
  formData.append('BatteryBrand', selectedBatteryBrands.map(option => option.value).join(','));
  formData.append('BatteryModel', selectedBatteryModels.map(option => option.value).join(','));
formData.append('batteryweight', batteryWeight);
formData.append('batteryheight', batteryHeight);
formData.append('capacity', batteryCapacity);
formData.append('voltage', voltage);
  // Append car or bike brands/models based on batteryType
  if (batteryType === 'car') {
    formData.append('carbrand', selectedCarBrands.map(option => option.value).join(',')); // Car brands
    formData.append('carModel', selectedCarModels.map(option => option.value).join(',')); // Car models
    
  } else if (batteryType === 'bike') {
    formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(',')); // Bike brands
    formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(',')); // Bike models
  }
}


  // Alloy Wheel
  if (tyreType === 'alloywheel') {
    formData.append('WheelSize', WheelSize); // Wheel size
    formData.append('Holes', Holes); // Number of holes
    formData.append('Color', Color); // Color
    formData.append('PCD', PCD); // PCD
    formData.append('alloywheelType', alloywheelType); // car or bike
      // Append alloy wheel brand and model
  formData.append('alloywheelBrand', selectedAlloywheelBrands.map(option => option.value).join(',')); // Alloy wheel brands
  formData.append('alloywheelModel', selectedAlloywheelModels.map(option => option.value).join(',')); // Alloy wheel models


    // Append car or bike brands/models based on alloywheelType
    if (alloywheelType === 'car') {
      formData.append('carbrand', selectedCarBrands.map(option => option.value).join(',')); // Car brands
      formData.append('carModel', selectedCarModels.map(option => option.value).join(',')); // Car models
    } else if (alloywheelType === 'bike') {
      formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(',')); // Bike brands
      formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(',')); // Bike models
    }
  }

    // Append accessory data if accessory type is selected
    if (tyreType === 'accessories') {
      formData.append('accessoryType', accessoryType);
      formData.append('accessoryBrand', selectedAccessoryBrands.map(option => option.value).join(','));
      formData.append('accessoryModel', selectedAccessoryModels.map(option => option.value).join(','));
    }

      formData.append('width', width);
      formData.append('height', height);
      formData.append('customs', customs);
      formData.append('speedRating', speedRating);
      formData.append('loadCapacity',loadCapacity);
      formData.append('material',material);
      formData.append('quantity',quantity);
      formData.append('manufactureMonth',manufactureMonth);
      formData.append('manufactureYear',manufactureYear);
      // formData.append('seasons', seasons.map(option => option.value).join(',')); 

      formData.append('seasons', seasons.join(','));

      for (let i = 0; i < image.length; i++) {
        formData.append('image', image[i]);
      }
      formData.append('price', price);
      formData.append('Salesprice', Salesprice);
      formData.append('description', description);
      formData.append('description1', description1);
      formData.append('fronttyre', fronttyre);
      formData.append('reartyre', reartyre);
      formData.append('warranty', warranty);
      formData.append('state', selectedStates);
      formData.append('city', selectedCities);
      formData.append('addresses', JSON.stringify(addresses));


      avatarImages.forEach((file) => {
        formData.append('avatar', file); 
      });
    
      thumb1Images.forEach((file) => {
        formData.append('thumb1', file);
      });
    
      thumb2Images.forEach((file) => {
        formData.append('thumb2', file); 
      });
    
      thumb3Images.forEach((file) => {
        formData.append('thumb3', file); 
      });
    
      thumb4Images.forEach((file) => {
        formData.append('thumb4', file); 
      });
    
      thumb5Images.forEach((file) => {
        formData.append('thumb5', file); 
      });
    
      thumb6Images.forEach((file) => {
        formData.append('thumb6', file); 
      });

      const response = await fetch(`${url.nodeapipath}/add-tyre`, {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setError(null);
      } else {
        setError(data.message);
        setSuccess(null);
      }
    } catch (error) {
      setError('Error adding tyre');
      setSuccess(null);
    }
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









// -------------------- Truck Brand / Truck Model ----------------------------
  
// Fetch truck brands
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



// ---------------------------Tractor brand / model ----------------------------

// Fetch tractor brands
useEffect(() => {
  const fetchTractorBrands = async () => {
    try {
      const response = await axios.get(`${url.nodeapipath}/get-tractorbrand`);
      const activeTractorBrands = response.data.filter(brand => brand.active);
      setTractorBrands(activeTractorBrands.map(brand => ({ label: brand.name, value: brand._id })));
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
        const response = await axios.get(`${url.nodeapipath}/get-tractormodel?${query}`);
        const activeModels = response.data.filter(model => model.active);
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

// Handle tractor brand selection change
const handleTractorBrandsChange = (selectedOptions) => {
  setSelectedTractorBrands(selectedOptions);
};

// Handle tractor model selection change
const handleTractorModelsChange = (selectedOptions) => {
  setSelectedTractorModels(selectedOptions);
};
 
//  ------------------------------ Car Brand / car Model -----------------------


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
        const selectedBrandIds = selectedCarBrands.map(option => option.value);
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
      ['clean']  // Clear formatting option
    ],
  };
  
  // Define the formats to be used in the editor
  const formats = [
    'header', 'font', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'align', 'bold', 'italic', 'underline', 'link', 'image'
  ];
  
  // Function to handle editor content changes
  const handleEditorChange = (content) => {
    // Set the editor content
    setDescription1(content);
  };
  
  // Function to render editor content safely as HTML in your component
  const renderDescription = () => {
    return { __html: description1 };
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
            <h1>Add Product</h1>
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
                <h2>Add Product</h2>
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
  name="avatar"  // Updated to 'avatar'
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
      src={avatarImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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
          src={thumb1ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>



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
          src={thumb2ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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
          src={thumb3ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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
          src={thumb4ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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
          src={thumb5ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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
          src={thumb6ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
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

                        {/* <div className="form-group row">
                            <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                            <div className="col-12">
                            <Select
                      id="tyreBrand"
                      name="tyreBrand"
                      value={selectedTyreBrand}
                      onChange={handleSelectChange}
                      options={activeTyreBrands.map(brand => ({
                        value: brand._id, // ID for form data
                        label: brand.name // Name for display
                      }))}
                      className="form-input"
                      isMulti
                    />
                            </div>
                          </div> */}



                          <hr/>



<div className="col-md-12 mt-5 mb-25">
  <label className="form-label">Vehicle Type</label>
  <div className="form-checkbox-box">
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="car"
        name="tyreType"
        checked={tyreType === 'car'}
        onChange={(event) => setTyreType(event.target.value)}
      />
      <label>Car</label>
    </div>

    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="bike"
        name="tyreType"
        checked={tyreType === 'bike'}
        onChange={(event) => setTyreType(event.target.value)}
      />
      <label>Bike</label>
    </div>

    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="truck"
        name="tyreType"
        checked={tyreType === 'truck'}
        onChange={(event) => setTyreType(event.target.value)}
      />
      <label>Truck</label>
    </div>

    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="tractor"
        name="tyreType"
        checked={tyreType === 'tractor'}
        onChange={(event) => setTyreType(event.target.value)}
      />
      <label>Tractor</label>
    </div>

    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="battery"
        name="tyreType"
        checked={tyreType === 'battery'}
        onChange={(event) => setTyreType(event.target.value)}
      />
      <label>Battery</label>
    </div>

    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="alloywheel" // New value for alloy wheel
        name="tyreType"
        checked={tyreType === 'alloywheel'} // Check if the selected type is alloy wheel
        onChange={(event) => setTyreType(event.target.value)} // Update state on change
      />
      <label>Alloy Wheel</label> 
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        value="accessories" // New value for accessories
        name="tyreType"
        checked={tyreType === 'accessories'} // Check if the selected type is accessories
        onChange={(event) => setTyreType(event.target.value)} // Update state on change
      />
      <label>Accessories</label> 
    </div>
  </div>
</div>





  <div className="form-group row">
                            <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                            <div className="col-12">
                            <Select
                      id="tyreBrand"
                      name="tyreBrand"
                      value={selectedTyreBrand}
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
<input
type="radio"
value="Front Tyre"  // Set the value as "Front Tyre"
onChange={(event) => setFronttyre(event.target.value)}  // Set the selected value in state
checked={fronttyre === "Front Tyre"}  // Ensure the radio button is selected based on state
className="form-input"
/>
<label>Front Tyre</label>
</div>
<div className="form-check form-check-inline">
<input
type="radio"
value="Rear Tyre"  // Set the value as "Rear Tyre"
onChange={(event) => setRearTyre(event.target.value)}  // Set the selected value in state
checked={reartyre === "Rear Tyre"}  // Ensure the radio button is selected based on state
className="form-input"
/>
<label>Rear Tyre</label>
</div>
</div>
</div>


</>
)}  


{tyreType === 'truck' && (
  <div>
    <div className="col-md-12">
      <label className="form-label">Truck Brand</label>
      <Select
isMulti
options={truckBrands} // Assuming truckBrands is an array of options
value={selectedTruckBrands} // State for selected truck brands
onChange={setSelectedTruckBrands} // Function to update state
className="form-input"
/>
    </div>
    <br/>

    <div className="col-md-12">
      <label className="form-label">Truck Model</label>
      
      
<Select
isMulti
options={truckModels} // Assuming truckModels is an array of options
value={selectedTruckModels} // State for selected truck models
onChange={setSelectedTruckModels} // Function to update state
className="form-input"
/>
    </div>

    <br/>
  </div>
)}


{tyreType === 'tractor' && (
      <div>
        <div className="col-md-12">
           <label className="form-label">Tractor Brand</label>
       <Select
        isMulti
          options={tractorBrands}
            value={selectedTractorBrands}
             onChange={handleTractorBrandsChange}
             className="form-input"
              />
</div>
<br/>
<div className="col-md-12">
<label className="form-label">Tractor Model</label>
<Select
isMulti
options={tractorModels}
value={selectedTractorModels}
onChange={handleTractorModelsChange}
className="form-input"
/>
</div>
<br/>
</div>
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



{/* <div className="col-md-4">
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
</div> */}


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




{/* 
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
</div> */}

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


{/* 
{tyreType !== 'battery' && (
  <div className="col-md-4">
    <label className="form-label">Material</label>
    <select name="categories" id="Categories" value={material} onChange={(event) => setMaterial(event.target.value)} className="form-input">
      <option value="">Material</option>
      {Material.map((material, index) => (
        <option key={index} value={material}>
          {material}
        </option>
      ))}
    </select>
  </div>
)} */}


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




{/* 
<div className="col-md-3">
  <label className="form-label">
    {tyreType === 'battery' ? 'Battery Width' : 
     tyreType === 'alloywheel' ? 'Holes' : 
     'Width'}
  </label>
  <select
    name="categories"
    id="Categories"
    value={
      tyreType === 'battery' ? batteryWidth : 
      tyreType === 'alloywheel' ? Holes : 
      width
    }
    onChange={(event) => {
      if (tyreType === 'battery') {
        setBatteryWidth(event.target.value);
      } else if (tyreType === 'alloywheel') {
        setHoles(event.target.value);
      } else {
        setWidth(event.target.value);
      }
    }}
    className="form-input"
  >
    <option value="">
      {tyreType === 'battery' ? 'Select Battery Width' : 
       tyreType === 'alloywheel' ? 'Select Holes' : 
       'Select Width'}
    </option>
    {(tyreType === 'battery' ? batteryWidthOptions : 
      tyreType === 'car' ? widthOptions : 
      tyreType === 'alloywheel' ? holesOptions : 
      widthOptions1).map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
</div> */}


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



{/* 
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
</div> */}


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






{/* {tyreType !== 'battery' && tyreType !== 'alloywheel' && (
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
      {/* Conditionally render the customs options based on the selected vehicle type 
      {(tyreType === 'car' ? customsOptions : customsOptions1).map((custom, index) => (
        <option key={index} value={custom}>
          {custom}
        </option>
      ))}
    </select>
  </div>
)} */}


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
              {cities.map((city) => (
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
    value={addresses[index].pinCode}  // Use the address-specific pinCode
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
                        {error && <p className="error-message1">{error}</p>}
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

export default AddTyreForm;


















































































