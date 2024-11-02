import { useEffect } from "react";
import { mapContact } from "./Store";


const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
	const data = await fetch("https://randomuser.me/api/?result=50");
	const ContactData = await data.json();
	return ContactData.results.map(mapContact);
};

const Contacts = ({ navigation }) => {
	const { contacts } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {

	})
}