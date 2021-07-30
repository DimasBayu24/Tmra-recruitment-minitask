import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import Card from '../components/Card'
import Table from '../components/Table'
import List from '../components/List'
const Screen1 = () => {
  
 
    return (
        <div className="w-full h-auto mx-auto px-0 background-screen" >
            <Header />
            <div className="flex flex-col sm:flex-row " >
            <Card text="Campaign Total" number="1000" logo="file"/>
            <Card text="Campaign Total" number="1000" logo="check"/>
            <Card text="Campaign Total" number="1000" logo="tractor"/>
            </div>
            <div className="mx-4" >
            <Table />
            </div>
            <div className="mx-4" >
            <List />
            </div>
        </div>
    );
}

export default Screen1;