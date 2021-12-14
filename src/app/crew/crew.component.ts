import { Component, OnInit } from '@angular/core';
import { elementClassProp } from '@angular/core/src/render3';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Key } from 'protractor';
import { isArray } from 'util';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  memberBeingEdited: object = null;
  add(memberName: string, isFirst: boolean) {
   //for(let i in this.crew){
  //console.log();   
  //if(this.crew[i]['name'] !== {memberName}){
    if ({memberName} !== name){
    this.crew.push({name: memberName, firstMission: isFirst});
  }}
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  edit(member: object) {
    this.memberBeingEdited = member;
 }
 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }
}
