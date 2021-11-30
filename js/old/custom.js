/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var colors = [
['#ffffff', '#fd9426'], ['#ffffff', '#fc3158'], ['#ffffff', '#53d769'], ['#ffffff', '#147efb']
];
var circle1 = Circles.create({
    id: 'circles-1',
    radius: 80,
    percentage: 50,
    maxValue: 100,
    width: 10,
    text: '%',
    colors: ['#ffffff', '#fd9426'],
    duration: 400,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
});
var circle2 = Circles.create({
    id: 'circles-2',
    radius: 80,
    percentage: 90,
    maxValue: 100,
    width: 10,
    text: '%',
    colors: ['#ffffff', '#fc3158'],
    duration: 400,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
});
var circle3 = Circles.create({
    id: 'circles-3',
    radius: 80,
    percentage: 50,
    maxValue: 100,
    width: 10,
    text: '%',
    colors: ['#ffffff', '#53d769'],
    duration: 400,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
});
var circle4 = Circles.create({
    id: 'circles-4',
    radius: 80,
    percentage: 85,
    maxValue: 100,
    width: 10,
    text: '%',
    colors: ['#ffffff', '#147efb'],
    duration: 400,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
});