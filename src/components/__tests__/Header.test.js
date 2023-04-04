import { render } from "@testing-library/react"
import Header from '../Header';

test(" Logo should load on render ", () => {

    const header = render(<Header />);
    console.log(header)


})