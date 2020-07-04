import React from "react"
import { Container } from "react-bootstrap"
import "./Tables.scss"

class Tables extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <table className="table">
                        <thead>
                            <tr className="table">
                                <th scope="col">
                                    {" "}
                                    <i
                                        className="fa fa-briefcase"
                                        aria-hidden="true"
                                    ></i>
                                </th>
                                <th scope="col"> ФИО </th>
                                <th scope="col"> Гуппа </th>
                                <th scope="col"> Кафедра </th>
                                <th scope="col"> Скачать PDF </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Куминов Илья Ренатович</td>
                                <td>ДКН-811</td>
                                <td>Компьютерные системы и комплексы</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Гергерт Павел Алексеевич</td>
                                <td>ДКН-811</td>
                                <td>Компьютерные системы и комплексы</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>

                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <i
                                        className="fa fa-cloud-download"
                                        aria-hidden="true"
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
        )
    }
}
export default Tables
