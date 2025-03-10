import Layout from "../components/Layout";
import MailForm from "../components/MailForm";
import Map from "../components/Map";

function Contact() {
	return (
		<Layout title={"CONTACT"}>
			<MailForm />
			<Map />
		</Layout>
	);
}
export default Contact;
