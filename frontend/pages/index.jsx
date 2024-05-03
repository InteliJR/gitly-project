import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Products from '../components/products';
import Partners from '../components/partners';
import Projects from '@/components/projects';


export default function Home() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* <Contact /> */}
            {/* <Action /> */}
            <Products />
            <Partners />
            <Projects />
            <Footer />
        </div>
    );
    }


