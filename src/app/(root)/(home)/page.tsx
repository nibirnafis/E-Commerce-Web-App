import CustomerReview from '@/components/CustomerReview';
import HeroSection from '@/components/HeroSection';
import MostPopular from '@/components/MostPopular';
import Title from '@/components/Title';




const Page = () => {

    return (
        <div>
            <Title t1="WELCOME TO MEN’S LARGEST" t2="ONLINE WAREDROBE"></Title>
            <HeroSection></HeroSection>
            <Title t1="MOST POPULAR" t2="SEE OUR MOST POPULAR PRODUCTS"></Title>
            <MostPopular></MostPopular>
            <Title t1="CUSTOMERS REVIEW" t2="SEE WHAT CUSTOMERS HAVE TO SAY ABOUT OUR PRODUCTS"></Title>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Page;