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
            <Card text="Campaign Total" number="1200" logo="file"/>
            <Card text="Succeded Campaign" number="784" logo="check"/>
            <Card text="Amount Spend" number="Rp 1.236.000.000,-" logo="tractor"/>
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