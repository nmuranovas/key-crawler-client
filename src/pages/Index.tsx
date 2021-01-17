import React from 'react'
import Button from '../components/Button'
import FormControl from '../components/FormControl'
import FormLabel from '../components/FormLabel'
import Layout from '../components/Layout'

const Index = () => {
    return (
        <Layout>
            <h1 className="text-5xl">Welcome to *THE* Key Crawler</h1>
            <section className="mt-4 p-3 border border-gray-300 bg-gray-200 shadow-lg rounded-lg">
                <h2 className="text-3xl">Here are some control examples</h2>
                <div className="flex flex-col">
                    <div className="p-3">
                        <Button>Primary</Button>
                    </div>
                    <div className="p-3">
                        <Button variant="secondary">Secondary</Button>
                    </div>
                    <div className="p-3">
                        <FormControl placeholder="placeholder text only" />
                    </div>
                    <div className="p-3">
                        <FormLabel htmlFor="exampleTextId">Example text label:</FormLabel>
                        {" "}
                        <FormControl id="exampleTextId" value="example text" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Index
