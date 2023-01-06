import React,{useState,useEffect} from "react";
import {View,Text,Image} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import CustomScroll from '../components/CustomScroll';
import CustomDropDown from "../components/DropDown";
import Loading from "../components/ActivityIndicator";
import Theme from "../constants/Theme";
import { RadioButton  } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { useSelector } from 'react-redux'; 
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

export default function AddClientScreen(props){
    
    const theme = useSelector(state => state.themeManager);
    const [isModalVisible, setModalVisible] = useState(false);
    const [contentModal,setContentModal] = useState('');
    const [endLoadingImg,setLoadingImg] = useState(true);

    const toggleModal = (uri) => {
        setLoadingImg(true);
        setModalVisible(!isModalVisible);
        uri == '' ? setContentModal('https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-white-minimalist-background-wallpaper-image_396581.jpg') : setContentModal(uri);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            presentationStyle: 0
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);
    const [pictureTaken,setPictureTaken] = useState(false);
    const [showCamera,setShowCamera] = useState(false);

    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    
    const permisionFunction = async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(cameraPermission.status === 'granted');
        const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
        setGalleryPermission(imagePermission.status === 'granted');
        if (imagePermission.status !== 'granted' && cameraPermission.status !== 'granted') {
            alert('Permission for media access needed.');
        }
    };

    useEffect(() => {
        permisionFunction();
    }, []);

    const takePicture = async () => {
        if(showCamera === false){
            setShowCamera(true)
        }else{
            if (camera) {
                const data = await camera.takePictureAsync(null);
                setImageUri(data.uri);
                setPictureTaken(true)
                setShowCamera(false)
            }
        }
    };
    // access form
    const [checked, setChecked] = useState(false);
    
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
    ]);

    // male inputs
    const [maleClientName,setMaleClientName] = useState('');
    const [maleClientLocation,setMaleClientLocation] = useState('');
    const [maleClientPhone,setMaleClientPhone] = useState(null);
    const [maleClientShoulder,setMaleClientShoulder] = useState(null);
    const [maleClientWrist,setMaleClientWrist] = useState(null);
    const [maleClientArmL,setMaleClientArmL] = useState(null);
    const [maleClientArmW,setMaleClientArmW] = useState(null);
    const [maleClientArmHole,setMaleClientArmHole] = useState(null);
    const [maleClientWaist,setMaleClientWaist] = useState(null);
    const [maleClientLegL,setMaleClientLegL] = useState(null);
    const [maleClientThigh,setMaleClientThigh] = useState(null);
    const [maleClientTorso,setMaleClientTorso] = useState(null);
    const [maleClientChestL,setMaleClientChestL] = useState(null);
    const [maleClientBodice,setMaleClientBodice] = useState(null);
    const [maleClientBackBodice,setMaleClientBackBodice] = useState(null);
    // female inputs
    const [femaleClientName,setFemaleClientName] = useState('');
    const [femaleClientLocation,setFemaleClientLocation] = useState('');
    const [femaleClientPhone,setFemaleClientPhone] = useState(null);
    const [femaleClientShoulder,setFemaleClientShoulder] = useState(null);
    const [femaleClientWrist,setFemaleClientWrist] = useState(null);
    const [femaleClientArmL,setFemaleClientArmL] = useState(null);
    const [femaleClientArmW,setFemaleClientArmW] = useState(null);
    const [femaleClientArmHole,setFemaleClientArmHole] = useState(null);
    const [femaleClientWaist,setFemaleClientWaist] = useState(null);
    const [femaleClientLegL,setFemaleClientLegL] = useState(null);
    const [femaleClientThigh,setFemaleClientThigh] = useState(null);
    const [femaleClientTorso,setFemaleClientTorso] = useState(null);
    const [femaleClientChestL,setFemaleClientChestL] = useState(null);
    const [femaleClientBodice,setFemaleClientBodice] = useState(null);
    const [femaleClientBackBodice,setFemaleClientBackBodice] = useState(null);

    return (
        <>
            <Background type="type1">
                <Banner type="type2" name="Create Client" onPressOne={() => {props.navigation.goBack()}} iconOne="chevron-back-outline" />
                {/* show mesurement image */}
                
                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1,backgroundColor: theme.mode === 'light' ? Theme.primary : Theme.lightSecondary,paddingHorizontal: 10,paddingVertical: 10,borderRadius: 10}}>
                        {
                            endLoadingImg == true ?
                            <Loading style={{marginBottom: 10,marginTop: 20}} />
                            :<></>
                        }
                        
                        <View style={{paddingHorizontal: 40}}>
                            <Image onLoad={()=>{setLoadingImg(false)}} source={{uri: contentModal}} style={{height: 200,marginTop: 30}} />
                            <CustomButton onPress={()=> {toggleModal('')}} label="Close" style={{marginTop: 20}} />
                        </View>
                    </View>
                </Modal>
                
                <CustomScroll>
                    <>
                        <CustomText label={"Note: click on the 'eye icon' to show an example of measurement for measurement inputs."} style={{marginBottom: 10}} type="extrabold" size={Theme.fontSize - 1} />
                        <CustomText label="Select Measurement Type" type="medium" size={Theme.fontSize - 2} />
                        <View style={{flexDirection: 'row',marginRight: 10,justifyContent: 'space-between'}}>
                            <RadioButton
                                value="in"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                            />
                            <CustomText onPress={() => setChecked('first')} style={{marginTop: 5}} label="In" type="regular" size={Theme.fontSize} />
                            <RadioButton
                                value="cm"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                            />
                            <CustomText onPress={() => setChecked('second')} style={{marginTop: 5}} label="cm" type="regular" size={Theme.fontSize} />
                            <RadioButton
                                value="mm"
                                status={ checked === 'third' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('third')}
                            />
                            <CustomText onPress={() => setChecked('third')} style={{marginTop: 5}} label="mm" type="regular" size={Theme.fontSize} />
                        </View>
                        <CustomDropDown
                            open={genderOpen}
                            value={genderValue}
                            items={gender}
                            setOpen={setGenderOpen}
                            setValue={setGenderValue}
                            setItems={setGender}
                            placeholder="Select Gender"
                            zindex={10}
                        />
                        {
                            genderValue === 'male' ?
                            <>
                                {
                                    imageUri !== null ?
                                    <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: -150,marginBottom: 150}}>
                                        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 90, height: 90,borderRadius: Theme.radius + 50,marginTop: 20,marginRight: 10 }} />}
                                    </View>:<></>
                                }
                                
                                {
                                    showCamera === true ?
                                    <View style={{ flex: 1, flexDirection: 'row',marginTop: -120,marginBottom: 150}}>
                                        <Camera
                                            ref={(ref) => setCamera(ref)}
                                            style={{flex: 1,aspectRatio: 1,}}
                                            type={type}
                                            ratio={'1:1'}
                                        />
                                    </View>:
                                    null
                                }
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between',flexDirection: 'row',marginTop: -150 }}>
                                    <CustomButton icon="add-outline" onPress={pickImage} label={"select client image"} style={{marginTop: 20}} size={Theme.fontSize - 5} textStyle={{textTransform: 'uppercase'}} />
                                    <CustomText label="Or" style={{marginTop: 15}} />
                                    <CustomButton icon="camera-outline" onPress={takePicture} label={showCamera === true ? "Save capture" : "Take Picture"} style={{marginTop: 20}} size={Theme.fontSize - 5} textStyle={{textTransform: 'uppercase'}} />
                                </View>
                                <CustomInput placeholder="Client Name" icon="person-outline" onChangeText={text => setMaleClientName(text)} value={maleClientName} />
                                <CustomInput placeholder="Location" icon="home-outline" onChangeText={text => setMaleClientLocation(text)} value={maleClientLocation} />
                                <CustomInput placeholder="Phone No" icon="call-outline" onChangeText={text => setMaleClientPhone(text)} value={maleClientPhone} />
                                <CustomInput 
                                    placeholder="Shoulders Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'shoulder.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientShoulder(text)} value={maleClientShoulder}
                                />
                                <CustomInput 
                                    placeholder="Wrist" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'wrist.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientWrist(text)} value={maleClientWrist}
                                />
                                <CustomInput 
                                    placeholder="Arm Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'handl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmL(text)} value={maleClientArmL}
                                />
                                <CustomInput 
                                    placeholder="Arm Width" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'handw.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmW(text)} value={maleClientArmW}
                                />
                                <CustomInput 
                                    placeholder="Arm Hole" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'handw.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmHole(text)} value={maleClientArmHole}
                                />
                                <CustomInput 
                                    placeholder="Waist" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'waist.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientWaist(text)} value={maleClientWaist}
                                />
                                <CustomInput 
                                    placeholder="Leg Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'legl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientLegL(text)} value={maleClientLegL}
                                />
                                <CustomInput 
                                    placeholder="Thigh" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'thigh.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientThigh(text)} value={maleClientThigh}
                                />
                                <CustomInput 
                                    placeholder="Torso" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'torso.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientTorso(text)} value={maleClientTorso}
                                />
                                <CustomInput 
                                    placeholder="Chest" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'chestl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientChestL(text)} value={maleClientChestL}
                                />
                                <CustomInput 
                                    placeholder="Front Bodice" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'bodice.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientBodice(text)} value={maleClientBodice}
                                />
                                <CustomInput 
                                    placeholder="Back Bodice" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.MALE+'backbodice.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientBackBodice(text)} value={maleClientBackBodice}
                                />
                                <View style={{paddingHorizontal: '20%'}}>
                                    <CustomButton label={"Add Client"} style={{marginTop: 20}} size={Theme.fontSize - 4} textStyle={{textTransform: 'uppercase'}} />
                                </View>
                            </>
                            : genderValue ==='female' ?
                            <>
                                {
                                    imageUri !== null ?
                                    <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: -150,marginBottom: 150}}>
                                        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 90, height: 90,borderRadius: Theme.radius + 50,marginTop: 20,marginRight: 10 }} />}
                                    </View>:<></>
                                }
                                
                                {
                                    showCamera === true ?
                                    <View style={{ flex: 1, flexDirection: 'row',marginTop: -120,marginBottom: 150}}>
                                        <Camera
                                            ref={(ref) => setCamera(ref)}
                                            style={{flex: 1,aspectRatio: 1,}}
                                            type={type}
                                            ratio={'1:1'}
                                        />
                                    </View>:
                                    null
                                }
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between',flexDirection: 'row',marginTop: -150 }}>
                                    <CustomButton icon="add-outline" onPress={pickImage} label={"select client image"} style={{marginTop: 20}} size={Theme.fontSize - 5} textStyle={{textTransform: 'uppercase'}} />
                                    <CustomText label="Or" style={{marginTop: 15}} />
                                    <CustomButton icon="camera-outline" onPress={takePicture} label={showCamera === true ? "Save capture" : "Take Picture"} style={{marginTop: 20}} size={Theme.fontSize - 5} textStyle={{textTransform: 'uppercase'}} />
                                </View>
                                <CustomInput placeholder="Client Name" icon="person-outline" onChangeText={text => setMaleClientName(text)} value={maleClientName} />
                                <CustomInput placeholder="Location" icon="home-outline" onChangeText={text => setMaleClientLocation(text)} value={maleClientLocation} />
                                <CustomInput placeholder="Phone No" icon="call-outline" onChangeText={text => setMaleClientPhone(text)} value={maleClientPhone} />
                                <CustomInput 
                                    placeholder="Shoulders Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'shoulder.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientShoulder(text)} value={maleClientShoulder}
                                />
                                <CustomInput 
                                    placeholder="Wrist" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'wrist.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientWrist(text)} value={maleClientWrist}
                                />
                                <CustomInput 
                                    placeholder="Arm Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'handl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmL(text)} value={maleClientArmL}
                                />
                                <CustomInput 
                                    placeholder="Arm Width" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'handw.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmW(text)} value={maleClientArmW}
                                />
                                <CustomInput 
                                    placeholder="Arm Hole" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'handw.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientArmHole(text)} value={maleClientArmHole}
                                />
                                <CustomInput 
                                    placeholder="Waist" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'waist.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientWaist(text)} value={maleClientWaist}
                                />
                                <CustomInput 
                                    placeholder="Leg Length" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'legl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientLegL(text)} value={maleClientLegL}
                                />
                                <CustomInput 
                                    placeholder="Thigh" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'thigh.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientThigh(text)} value={maleClientThigh}
                                />
                                <CustomInput 
                                    placeholder="Torso" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'torso.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientTorso(text)} value={maleClientTorso}
                                />
                                <CustomInput 
                                    placeholder="Chest" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'chestl.png')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientChestL(text)} value={maleClientChestL}
                                />
                                <CustomInput 
                                    placeholder="Front Bodice" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'bodice.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientBodice(text)} value={maleClientBodice}
                                />
                                <CustomInput 
                                    placeholder="Back Bodice" 
                                    keyboardType="numeric"
                                    onPressIcon={()=> {toggleModal(Theme.FEMALE+'backbodice.jpg')}} 
                                    icon="eye-outline" 
                                    onChangeText={text => setMaleClientBackBodice(text)} value={maleClientBackBodice}
                                />
                                <View style={{paddingHorizontal: '20%'}}>
                                    <CustomButton label={"Add Client"} style={{marginTop: 20}} size={Theme.fontSize - 4} textStyle={{textTransform: 'uppercase'}} />
                                </View>
                            </>:<></>
                        }
                    </>
                </CustomScroll>
            </Background>
        </>
    )
}