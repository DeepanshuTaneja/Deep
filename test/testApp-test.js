/**
 * Created by deepanshu on 4/21/17.
 */
var React = require('react');
var expect = require('expect.js')
var ReactTestUtil=require('react-dom/test-utils')
var Todo =require('./Todo-test')
var ReactDom =require('react-dom')
var Grid =require('./GridData-test');
var SockConn=require('./SockConnection-test')

describe('root', function () {
        it('renders without problems', function () {
            expect('check').to.be.a('string');
        });
    });


describe('check valid React Element',function () {

      it('Sock Connection is valid',function () {
          expect(React.isValidElement(SockConn)).to.be.true

      })
        it('Grid Data is valid',function () {
     expect(React.isValidElement(Grid)).to.be.true

    })


})
describe('test Json string ', () => {
    it('my test', () => {
        let str = (JSON.stringify([{
            "id": Math.round(Math.random() * (1000 - 1) + 1),
            "name": "Deep",
            "currencyValue": (Math.random() * (100 - 1) + 1)

        }]))
        expect(str).to.be.a('string');

    })
    });
