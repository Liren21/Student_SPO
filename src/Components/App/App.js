import React from "react"
import Header from "../Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchForm from "../SearchForm/SearchForm"
import Tables from "../TableInfo/Tables"
import "./App.scss"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchForm />
                <Tables />
            </div>
        )
    }
}
export default App
