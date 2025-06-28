import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import BooksPage from "./ui/pages/BooksPage/BooksPage.jsx";
import LoginPage from "./ui/pages/LoginPage/LoginPage";
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage";
import CountryPage from "./ui/pages/CountryPage/CountryPage";
import AuthorDetails from "./ui/components/authors/AuthorDetails/AuthorDetails";
import BookDetails from "./ui/components/books/BookDetails/BookDetails";
import CountryDetails from "./ui/components/countries/CountryDetails/CountryDetails";
import {AuthProvider} from "./context/AuthContext";


const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="books" element={<BooksPage/>}/>
                        <Route path="books/:id" element={<BookDetails/>}/>
                        <Route path="authors" element={<AuthorsPage/>}/>
                        <Route path="authors/:id" element={<AuthorDetails/>}/>
                        <Route path="countries" element={<CountryPage/>}/>
                        <Route path="countries/:id" element={<CountryDetails/>}/>
                        <Route path="user/login" element={<LoginPage/>}/>

                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    );
};


export default App
