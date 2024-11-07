'use client';

import {useForm} from "react-hook-form";
import {Button, Col, Row} from "reactstrap";
import {post} from "@/core/httpClient";

export default function UserCreate() {
    const {register,
        watch,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onSubmit"
    });


    return (
        <>
            <Row className="mb-3">
                <Col md={6}>
                    <input type="text" className="form-control"
                           placeholder="First Name" {...register("firstName")} />
                </Col>
                <Col md={6}>
                    <input type="text" className="form-control"
                           placeholder="Last Name" {...register("lastName")}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <input type="email" className="form-control"
                           placeholder="Email" {...register("email")} />
                </Col>
                <Col md={6}>
                    <input type="text" className="form-control"
                           placeholder="Contact number" {...register("contactNumber")}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <input type="password" className="form-control"
                           placeholder="Password" {...register("password")} />
                </Col>
                <Col md="12" className="d-flex justify-content-end">
                    {/*<Button className="btn btn-primary" type="button" */}
                    {/*    onClick={() => {*/}
                    {/*    console.log(errors);*/}
                    {/*    handleSubmit(async (data) => {*/}
                    {/*        let result = await post("/signup", data);*/}
                    {/*    })();*/}
                    {/*}}>Submit*/}
                    <Button className="btn btn-primary" type="button"
                            onClick={handleSubmit(async (data) => {
                                console.log("Form data:", data);
                                try {
                                    let result = await post("/auth/signup", data);
                                    console.log("Result: ", result);
                                } catch {
                                    console.log("Error during signup: ", result);
                                }
                            })}>Submit
                    </Button>
                </Col>
            </Row>
        </>
    )
}