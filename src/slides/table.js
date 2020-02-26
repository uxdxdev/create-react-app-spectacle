import React from "react";
import {
  Heading,
  Slide,
  Layout,
  Table,
  TableHeader,
  TableBody,
  TableHeaderItem,
  TableRow,
  TableItem
} from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="primary"
    notes="Hard to find cities without any pizza"
  >
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Pizza Toppings
    </Heading>
    <Layout>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem />
            <TableHeaderItem>2011</TableHeaderItem>
            <TableHeaderItem>2013</TableHeaderItem>
            <TableHeaderItem>2015</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>None</TableItem>
            <TableItem>61.8%</TableItem>
            <TableItem>39.6%</TableItem>
            <TableItem>35.0%</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Pineapple</TableItem>
            <TableItem>28.3%</TableItem>
            <TableItem>54.5%</TableItem>
            <TableItem>61.5%</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Pepperoni</TableItem>
            <TableItem />
            <TableItem>50.2%</TableItem>
            <TableItem>77.2%</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Olives</TableItem>
            <TableItem />
            <TableItem>24.9%</TableItem>
            <TableItem>55.9%</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  </Slide>
);
