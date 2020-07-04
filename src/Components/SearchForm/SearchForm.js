import React, { Component } from "react"
import { Container, Form, Button, Card } from "react-bootstrap"

class SearchForm extends Component {
    render() {
        return (
            <div className="input_group">
                <Container>
                    <Card className="card_main">
                        <div className="form_t">
                            <div className="top_main_text">Форма поиска</div>

                            <Form.Control
                                type="text"
                                placeholder="ФИО студента"
                                aria-describedby="inputGroupPrepend"
                                className="input_text"
                                required
                            />

                            <Form.Control
                                type="text"
                                placeholder="Группа"
                                aria-describedby="inputGroupPrepend"
                                className="input_text"
                                required
                            />

                            <Form.Control
                                type="text"
                                placeholder="Кафедра"
                                aria-describedby="inputGroupPrepend"
                                required
                                className="input_text"
                            />

                            <Button
                                variant="primary"
                                className="button_main_search"
                            >
                                {" "}
                                <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                ></i>{" "}
                                Поиск
                            </Button>

                            <Button
                                variant="danger"
                                className="button_main_delet"
                            >
                                <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                ></i>{" "}
                                Очистить поля
                            </Button>
                        </div>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SearchForm
