(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mason\projects\penny-budget\src\main.ts */"zUnb");


/***/ }),

/***/ "09y6":
/*!**********************************************************!*\
  !*** ./src/app/manage-budget/manage-budget.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageBudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBudgetComponent", function() { return ManageBudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_budget_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/budget.model */ "eWok");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/category.model */ "SEfn");
/* harmony import */ var _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/transaction.model */ "6nmG");
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/budget.service */ "QKEp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











const _c0 = ["setIncomeDialog"];
const _c1 = ["addBudgetDialog"];
const _c2 = ["manageCategoryDialog"];
function ManageBudgetComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_tr_19_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const budget_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteBudgetItem(budget_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](budget_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, budget_r7.amount));
} }
function ManageBudgetComponent_ng_template_43_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", category_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r11.title, " ");
} }
function ManageBudgetComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageBudgetComponent_ng_template_43_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.budgetAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageBudgetComponent_ng_template_43_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.budgetCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageBudgetComponent_ng_template_43_option_17_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_ng_template_43_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showCategoryDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Manage Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_ng_template_43_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addBudgetItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.budgetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.budgetCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
} }
function ManageBudgetComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Monthly Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageBudgetComponent_ng_template_45_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.monthlyIncome = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_ng_template_45_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.updateIncome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.monthlyIncome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
} }
function ManageBudgetComponent_ng_template_47_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", category_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r21.title);
} }
function ManageBudgetComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Category Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageBudgetComponent_ng_template_47_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.budgetCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_ng_template_47_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.addCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Categories: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageBudgetComponent_ng_template_47_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.categoryToRemove = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageBudgetComponent_ng_template_47_option_18_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_ng_template_47_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.deleteCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.budgetCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.errorMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.categoryToRemove);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.categories);
} }
class ManageBudgetComponent {
    constructor(budgetService, dialog, snackBar) {
        this.budgetService = budgetService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.budgetItems = [];
        this.date = new Date();
        this.categories = [];
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.currentUser = sessionStorage.getItem("username");
        this.getBudget();
        this.getCategories();
        this.getTotalBudget();
        this.monthlyIncome = localStorage.getItem("monthlyIncome");
    }
    getBudget() {
        this.budgetItems = [];
        this.budgetService.getBudgetByCategory(this.currentUser, this.month, this.year).subscribe(data => {
            Object.keys(data).forEach((key) => {
                let budget = new _shared_models_budget_model__WEBPACK_IMPORTED_MODULE_1__["Budget"]();
                budget.id = data[key].id;
                budget.amount = data[key].amount;
                budget.category = data[key].category;
                this.budgetItems.push(budget);
            });
        });
    }
    getCategories() {
        this.categories = [];
        this.budgetService.getBudgetCategories(this.currentUser).subscribe(data => {
            Object.keys(data).forEach((key) => {
                let category = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
                category.id = data[key].id;
                category.owner = data[key].owner;
                category.title = data[key].title;
                this.categories.push(category);
            });
        });
    }
    getTotalBudget() {
        this.budgetService.getTotalBudget(this.currentUser).subscribe(value => {
            this.totalBudget = value["amount"];
        });
    }
    showBudgetDialog() {
        this.dialog.open(this.addBudgetDialog, {
            minWidth: '30%',
            maxWidth: '100%'
        });
    }
    addBudgetItem() {
        let validator = /^[0-9].*$/;
        if (this.budgetAmount != null && validator.test(this.budgetAmount.toString()) && this.budgetCategory != null) {
            let budgetItem = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
            budgetItem.owner = this.currentUser;
            budgetItem.category = this.budgetCategory;
            budgetItem.amount = this.budgetAmount;
            this.budgetService.addBudget(budgetItem).subscribe(resp => {
                console.log(resp);
                this.dialog.closeAll();
            });
            this.getBudget();
            this.getTotalBudget();
        }
    }
    deleteBudgetItem(budgetItem) {
        this.budgetService.deleteBudget(budgetItem.id).subscribe(resp => {
            this.getBudget();
            this.getTotalBudget();
        });
    }
    updateIncome() {
        let valid = false;
        let validator = /^[0-9].*$/;
        if (this.monthlyIncome != null && validator.test(this.monthlyIncome.toString())) {
            valid = true;
            this.dialog.closeAll();
            localStorage.setItem("monthlyIncome", this.monthlyIncome.toString());
        }
        return valid;
    }
    showIncomeDialog() {
        this.dialog.open(this.setIncomeDialog, {
            minWidth: '30%',
            maxWidth: '100%'
        });
        this.monthlyIncome = null;
    }
    calculateSavings(monthlyIncome, totalBudget) {
        let savings = monthlyIncome - totalBudget;
        return savings;
    }
    showCategoryDialog() {
        this.dialog.open(this.manageCategoryDialog, {
            minWidth: '40%',
            maxWidth: '100%'
        });
    }
    addCategory() {
        if (this.budgetCategory == undefined) {
            this.errorMessage = "Please enter a category name.";
        }
        else {
            this.errorMessage = null;
            console.log(this.budgetCategory);
            this.budgetService.addCategory(this.currentUser, this.budgetCategory).subscribe(resp => {
                this.snackBar.open("Category added!", "OK", { "duration": 2000 });
                this.getCategories();
            });
            this.budgetCategory = undefined;
        }
    }
    deleteCategory() {
        if (this.categoryToRemove != undefined) {
            this.budgetService.deleteCategory(this.categoryToRemove.id).subscribe(resp => {
                this.snackBar.open("Category removed.", "OK", { "duration": 2000 });
                this.getCategories();
                this.categoryToRemove = undefined;
            });
        }
    }
    ngOnInit() {
    }
}
ManageBudgetComponent.ɵfac = function ManageBudgetComponent_Factory(t) { return new (t || ManageBudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_budget_service__WEBPACK_IMPORTED_MODULE_4__["BudgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ManageBudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageBudgetComponent, selectors: [["app-manage-budget"]], viewQuery: function ManageBudgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.setIncomeDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBudgetDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.manageCategoryDialog = _t.first);
    } }, decls: 49, vars: 10, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-10", "m-5"], ["aria-label", "breadcrumb", 2, "margin-top", "-25px", "margin-left", "-15px"], [1, "breadcrumb", 2, "background-color", "white"], [1, "breadcrumb-item"], ["href", "dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "click"], [1, "budgetTable", 2, "margin-top", "50px"], [2, "border-right", "none"], [4, "ngFor", "ngForOf"], [2, "text-align", "center", "border-left", "none"], [3, "routerLink", "click"], [2, "border-left", "none"], ["addBudgetDialog", ""], ["setIncomeDialog", ""], ["manageCategoryDialog", ""], ["align", "end"], ["mat-button", "", "matDialogClose", "yes", 1, "fa", "fa-window-close", 2, "font-size", "32px"], [2, "margin-top", "-50px"], [1, "container-fluid", "justify-content-center"], [1, "col-12", 2, "margin-top", "15px"], [1, "col-12"], ["type", "text", "name", "budgetAmount", 3, "ngModel", "ngModelChange"], [2, "color", "red", "width", "50px"], [1, "col-12", "mt-3"], ["name", "budgetCategory", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [2, "float", "right", "margin-top", "5px", 3, "click"], [3, "ngValue"], ["type", "text", "name", "monthlyIncome", 3, "ngModel", "ngModelChange"], [1, "col-12", 2, "margin-top", "25px"], ["type", "text", "name", "budgetCategory", 3, "ngModel", "ngModelChange"], [2, "color", "red"], [2, "margin-top", "5px", 3, "click"]], template: function ManageBudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Manage Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_Template_button_click_12_listener() { return ctx.showBudgetDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManageBudgetComponent_tr_19_Template, 9, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Monthly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBudgetComponent_Template_a_click_27_listener() { return ctx.showIncomeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Projected Savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ManageBudgetComponent_ng_template_43_Template, 22, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ManageBudgetComponent_ng_template_45_Template, 15, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ManageBudgetComponent_ng_template_47_Template, 22, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 4, ctx.monthlyIncome), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 6, ctx.totalBudget));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 8, ctx.calculateSavings(ctx.monthlyIncome, ctx.totalBudget)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYnVkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageBudgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-budget',
                templateUrl: './manage-budget.component.html',
                styleUrls: ['./manage-budget.component.css']
            }]
    }], function () { return [{ type: _services_budget_service__WEBPACK_IMPORTED_MODULE_4__["BudgetService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { setIncomeDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['setIncomeDialog']
        }], addBudgetDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addBudgetDialog']
        }], manageCategoryDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['manageCategoryDialog']
        }] }); })();


/***/ }),

/***/ "6nmG":
/*!****************************************************!*\
  !*** ./src/app/shared/models/transaction.model.ts ***!
  \****************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
class Transaction {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoint: 'http://localhost:80'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "KBZI":
/*!****************************************************************!*\
  !*** ./src/app/account-activity/account-activity.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivityComponent", function() { return AccountActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account.service */ "flj8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["addIncomeDialog"];
function AccountActivityComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountActivityComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r10.date, " ");
} }
function AccountActivityComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountActivityComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r11.category, " ");
} }
function AccountActivityComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountActivityComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transaction_r12.amount), " ");
} }
function AccountActivityComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 18);
} }
function AccountActivityComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountActivityComponent_td_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const transaction_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteTransaction(transaction_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountActivityComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function AccountActivityComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
const _c1 = function () { return [10, 25, 50]; };
class AccountActivityComponent {
    constructor(accountService, dialog) {
        this.accountService = accountService;
        this.dialog = dialog;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ["date", "category", "amount", "deleteAction"];
        this.transactions = [];
        this.currentUser = sessionStorage.getItem("username");
        this.getTransactionHistory();
    }
    getTransactionHistory() {
        this.accountService.getTransactionHistory(this.currentUser).subscribe(data => {
            Object.keys(data).forEach((key) => {
                this.transactions.push(data[key]);
            });
            this.dataSource.data = this.transactions;
            this.dataSource.paginator = this.paginator;
        });
    }
    showIncomeDialog() {
        let incomeDialog = this.dialog.open(this.addIncomeDialog, {
            width: '40%'
        });
    }
    deleteTransaction(transaction) {
        this.accountService.deleteTransaction(transaction).subscribe(resp => {
            this.transactions = [];
            this.getTransactionHistory();
        });
    }
    ngOnInit() {
    }
}
AccountActivityComponent.ɵfac = function AccountActivityComponent_Factory(t) { return new (t || AccountActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AccountActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountActivityComponent, selectors: [["app-account-activity"]], viewQuery: function AccountActivityComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addIncomeDialog = _t.first);
    } }, decls: 28, vars: 5, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-10", "m-5"], ["aria-label", "breadcrumb", 2, "margin-top", "-25px", "margin-left", "-15px"], [1, "breadcrumb", 2, "background-color", "white"], [1, "breadcrumb-item"], ["href", "dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["mat-table", "", 1, "mat-elevation-z0", "m-1", "activity", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "amount"], ["matColumnDef", "deleteAction"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "margin-top", "25px", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "routerLink", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AccountActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Account Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountActivityComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountActivityComponent_td_15_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountActivityComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountActivityComponent_td_18_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccountActivityComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccountActivityComponent_td_21_Template, 3, 3, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountActivityComponent_th_23_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountActivityComponent_td_24_Template, 3, 0, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountActivityComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountActivityComponent_tr_26_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border: none;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    border-bottom:1px solid #ccc;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-spacing: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtYWN0aXZpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFjY291bnQtYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLCB0ciwgLm1hdC1oZWFkZXItcm93LCAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-activity',
                templateUrl: './account-activity.component.html',
                styleUrls: ['./account-activity.component.css']
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], addIncomeDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addIncomeDialog']
        }] }); })();


/***/ }),

/***/ "QKEp":
/*!********************************************!*\
  !*** ./src/app/services/budget.service.ts ***!
  \********************************************/
/*! exports provided: BudgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetService", function() { return BudgetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class BudgetService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application-json');
    }
    addBudget(budgetItem) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/addBudget', { budgetItem });
    }
    getBudgetByCategory(username, month, year) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getBudgetByCategory', { "username": username, "month": month, "year": year });
    }
    getBudgetHistory(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getBudgetHistory', { "username": username });
    }
    getRemainingBalance(username, month, year) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getRemainingBalance', { "username": username, "month": month, "year": year });
    }
    getBudgetArchive(username, month, year) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getBudgetArchive', { "username": username, "month": month, "year": year });
    }
    getBudgetCategories(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/getBudgetCategories", { "username": username });
    }
    getTotalBudget(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/getTotalBudget", { "username": username });
    }
    addCategory(username, title) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/addCategory", { "username": username, "title": title });
    }
    deleteCategory(categoryId) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: {
                categoryId: categoryId
            }
        };
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/deleteCategory', options);
    }
    deleteBudget(budgetId) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: {
                budgetId: budgetId
            }
        };
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/deleteBudget', options);
    }
}
BudgetService.ɵfac = function BudgetService_Factory(t) { return new (t || BudgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BudgetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BudgetService, factory: BudgetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BudgetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_budget_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/budget.model */ "eWok");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/category.model */ "SEfn");
/* harmony import */ var _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/transaction.model */ "6nmG");
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/budget.service */ "QKEp");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/account.service */ "flj8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");














const _c0 = ["addIncomeDialog"];
const _c1 = ["addTransactionDialog"];
const _c2 = ["manageCategoryDialog"];
const _c3 = function (a0) { return { "width": a0 }; };
function DashboardComponent_div_30_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const budget_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, transaction_r10.amount / (budget_r8.amount * 100) * 10000 + "%"));
} }
function DashboardComponent_div_30_div_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const budget_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, transaction_r10.amount / (budget_r8.amount * 100) * 10000 + "%"));
} }
function DashboardComponent_div_30_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const budget_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, transaction_r10.amount / (budget_r8.amount * 100) * 10000 + "%"));
} }
function DashboardComponent_div_30_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_30_div_1_div_1_div_8_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_div_30_div_1_div_1_div_9_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_30_div_1_div_1_div_10_Template, 2, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const budget_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", budget_r8.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, transaction_r10.amount), " of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, budget_r8.amount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", transaction_r10.amount <= budget_r8.amount / 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", transaction_r10.amount >= budget_r8.amount * 0.6 && transaction_r10.amount <= budget_r8.amount * 0.9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", transaction_r10.amount >= budget_r8.amount * 0.9);
} }
function DashboardComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_30_div_1_div_1_Template, 11, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    const budget_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", budget_r8.category == transaction_r10.category);
} }
function DashboardComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_30_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.transactions);
} }
function DashboardComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", budget_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, budget_r24, "MMMM YYYY"));
} }
function DashboardComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-actions", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_41_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.addIncome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.incomeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
} }
function DashboardComponent_ng_template_43_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", category_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r28.title, " ");
} }
function DashboardComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-actions", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_43_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.transactionCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DashboardComponent_ng_template_43_option_18_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_43_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.showCategoryDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Manage Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_43_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.addTransaction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.transactionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.balance || ctx_r5.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.transactionCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
} }
function DashboardComponent_ng_template_45_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", category_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r34.title);
} }
function DashboardComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-actions", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Manage Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Category Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_45_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.categoryName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_45_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.addCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Categories: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_45_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.categoryToRemove = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DashboardComponent_ng_template_45_option_18_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_45_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.deleteCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.categoryToRemove);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.categories);
} }
class DashboardComponent {
    constructor(budgetService, accountService, dialog, snackBar, router) {
        this.budgetService = budgetService;
        this.accountService = accountService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.date = new Date();
        this.transactions = [];
        this.budgetItems = [];
        this.categories = [];
        this.budgetHistory = [];
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.currentUser = sessionStorage.getItem("username");
        // Add income form.
        this.incomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "incomeAmount": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.incomeAmount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9].*$")
            ]),
            "incomeDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.incomeDate)
        });
        // Add transaction form.
        this.transactionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "transactionAmount": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.transactionAmount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9].*$")
            ]),
            "transactionCategory": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.transactionCategory, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            "transactionDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.transactionDate)
        });
        this.getAccount();
        this.getIncome();
        this.getBudget();
        this.getSpent();
        this.getCategories();
        this.getBudgetHistory();
    }
    // Get account balance and account name.
    getAccount() {
        this.accountService.getAccount(this.currentUser).subscribe(resp => {
            this.balance = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(resp["balance"], 'en', '$');
            this.accountName = resp["accountName"];
            let budgetStartDate = resp["budgetStartDate"];
            if (this.monthLapsed(new Date(budgetStartDate))) {
                this.accountService.archiveAccount(this.currentUser).subscribe(value => {
                    console.log(value);
                });
            }
        });
    }
    // Get income earned this month.
    getIncome() {
        this.accountService.getAmountEarned(this.currentUser, this.month, this.year).subscribe(resp => {
            this.amountEarned = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(resp, 'en', '$');
        });
    }
    getSpent() {
        this.transactions = [];
        this.accountService.getTotalSpentByCategory(this.currentUser, this.month, this.year).subscribe(data => {
            let totalSpent = 0;
            if (data == 0) {
                this.amountSpent = "$0.00";
                // If nothing was spent this month, create template transactions by 
                // category from last month and rollover to this month.
                this.budgetItems.forEach(budgetItem => {
                    let template = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
                    template.category = budgetItem["category"];
                    template.amount = 0;
                    this.transactions.push(template);
                });
            }
            else {
                this.transactions = [];
                // Get all transactions by category and calculate total spent.  
                Object.keys(data).forEach((key) => {
                    let transaction = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
                    transaction.id = data[key].id;
                    transaction.owner = data[key].owner;
                    transaction.amount = data[key].amount;
                    transaction.archived = data[key].archived;
                    transaction.date = data[key].date;
                    transaction.category = data[key].category;
                    transaction.account = data[key].account;
                    this.transactions.push(transaction);
                    totalSpent += transaction.amount;
                });
                // We want to show budget items even if nothing was spent this month
                // in each category.
                let budgetTemplates = [];
                this.budgetItems.forEach(budgetItem => {
                    let template = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
                    template.category = budgetItem.category;
                    template.amount = 0;
                    if (!this.transactions.find(e => e.category === template.category)) {
                        budgetTemplates.push(template);
                    }
                });
                budgetTemplates.forEach(budgetTemplate => {
                    this.transactions.push(budgetTemplate);
                });
                // Format total spent.
                this.amountSpent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(totalSpent, 'en', '$');
            }
        });
    }
    getBudget() {
        this.budgetItems = [];
        this.budgetService.getBudgetByCategory(this.currentUser, this.month, this.year).subscribe(data => {
            Object.keys(data).forEach((key) => {
                let budget = new _shared_models_budget_model__WEBPACK_IMPORTED_MODULE_3__["Budget"]();
                budget.amount = data[key].amount;
                budget.category = data[key].category;
                this.budgetItems.push(budget);
            });
        });
    }
    viewSelectedArchive() {
        if (this.selectedArchive != null) {
            let date = new Date(this.selectedArchive);
            let month = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'MM', 'en-us');
            let year = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'YYYY', 'en-us');
            this.router.navigate(['/budget-history/', month, year]);
        }
    }
    getBudgetHistory() {
        this.budgetService.getBudgetHistory(this.currentUser).subscribe(data => {
            Object.keys(data).forEach((key) => {
                let date = new Date(data[key].year, data[key].month, 0, 1);
                this.budgetHistory.push(date);
            });
        });
    }
    getCategories() {
        this.categories = [];
        this.budgetService.getBudgetCategories(this.currentUser).subscribe(data => {
            Object.keys(data).forEach((key) => {
                let category = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_4__["Category"]();
                category.id = data[key].id;
                category.owner = data[key].owner;
                category.title = data[key].title;
                this.categories.push(category);
            });
        });
    }
    showIncomeDialog() {
        this.dialog.open(this.addIncomeDialog, {
            minWidth: '30%',
            maxWidth: '100%'
        });
    }
    addIncome() {
        if (this.incomeForm.get('incomeAmount').invalid) {
            this.errorMessage = "Please enter a valid amount.";
        }
        else {
            this.incomeAmount = this.incomeForm.get('incomeAmount').value;
            this.incomeDate = this.incomeForm.get('incomeDate').value;
            if (this.incomeDate == null) {
                let today = new Date();
                this.incomeDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(today, 'yyyy-MM-dd', 'en-us');
            }
            let transaction = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
            transaction.id = null;
            transaction.owner = this.currentUser;
            transaction.amount = this.incomeAmount;
            if (this.monthLapsed(new Date(this.incomeDate))) {
                transaction.archived = 1;
            }
            else {
                transaction.archived = 0;
            }
            transaction.date = this.incomeDate;
            transaction.category = 'Income';
            transaction.account = null;
            this.accountService.addTransaction(transaction).subscribe(res => {
                this.getAccount();
                this.getIncome();
            });
        }
    }
    showTransactionDialog() {
        this.dialog.open(this.addTransactionDialog, {
            minWidth: '40%',
            maxWidth: '100%'
        });
    }
    showCategoryDialog() {
        this.dialog.open(this.manageCategoryDialog, {
            minWidth: '40%',
            maxWidth: '100%'
        });
    }
    addTransaction() {
        let amount = this.transactionForm.get('transactionAmount');
        let category = this.transactionForm.get('transactionCategory');
        let date = this.transactionForm.get('transactionDate');
        if (amount.invalid) {
            this.errorMessage = "Please enter a valid amount.";
        }
        else if (category.invalid) {
            this.errorMessage = "Please select a category.";
        }
        else {
            this.errorMessage = undefined;
            if (date.value == null) {
                let today = new Date();
                this.transactionDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(today, 'yyyy-MM-dd', 'en-us');
            }
            else {
                this.transactionDate = date.value;
            }
            let transaction = new _shared_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
            transaction.id = null;
            transaction.owner = this.currentUser;
            transaction.amount = amount.value;
            transaction.category = category.value.title;
            transaction.account = this.accountName;
            transaction.date = this.transactionDate;
            let correctedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(transaction.date, 'MM-dd-yyyy', 'en-us');
            if (this.monthLapsed(new Date(correctedDate))) {
                transaction.archived = 1;
            }
            else {
                transaction.archived = 0;
            }
            this.accountService.addTransaction(transaction).subscribe(resp => {
                this.snackBar.open("Transaction added.", "OK", { "duration": 2000 });
                this.getAccount();
                this.getBudget();
                this.getSpent();
            });
        }
    }
    addCategory() {
        if (this.categoryName == undefined) {
            this.errorMessage = "Please enter a category name.";
        }
        else {
            this.errorMessage = null;
            this.budgetService.addCategory(this.currentUser, this.categoryName).subscribe(resp => {
                this.snackBar.open("Category added!", "OK", { "duration": 2000 });
                this.getCategories();
            });
            this.categoryName = undefined;
        }
    }
    deleteCategory() {
        if (this.categoryToRemove != undefined) {
            this.budgetService.deleteCategory(this.categoryToRemove.id).subscribe(resp => {
                this.snackBar.open("Category removed.", "OK", { "duration": 2000 });
                this.getCategories();
                this.categoryToRemove = undefined;
            });
        }
    }
    monthLapsed(date) {
        let lapsed = false;
        let today = new Date();
        if ((date.getMonth() + 1) < (today.getMonth() + 1) || date.getFullYear() < today.getFullYear()) {
            lapsed = true;
        }
        return lapsed;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_budget_service__WEBPACK_IMPORTED_MODULE_6__["BudgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addIncomeDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addTransactionDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.manageCategoryDialog = _t.first);
    } }, decls: 47, vars: 10, consts: [[1, "container-fluid"], [1, "row", "justify-content-center", 2, "margin-top", "-25px"], [1, "col-md-3", "order-1", "order-md-1", "mr-1", "balanceInfo"], [3, "routerLink", "click"], ["href", "account-activity"], ["href", "manage-budget"], [1, "col-md-10", "order-1", "order-md-1", "mr-1", "budgetProgress", "style", 2, "margin-top", "-25px"], [1, "d-flex", "justify-content-between", 2, "margin-top", "-50px", "margin-bottom", "25px"], [1, "ml-auto", 3, "click"], [4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "-40px"], [1, "col-md-1", "order-1"], [1, "col-md-3", "mr-1", "order-1", "budgetProgress"], ["name", "selectedArcive", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "click"], [1, "col-md-3", "order-1"], ["addIncomeDialog", ""], ["addTransactionDialog", ""], ["manageCategoryDialog", ""], ["class", "budgetContainer", 4, "ngIf"], [1, "budgetContainer"], [1, "col-12", 2, "padding", "0"], [1, "money", 2, "float", "right", "font-size", "18px"], [1, "budgetItem"], ["class", "budgetStatus", "style", "background-color: rgb(85, 194, 91);", 3, "ngStyle", 4, "ngIf"], ["class", "budgetStatus", "style", "background-color: #f3aaa1;", 3, "ngStyle", 4, "ngIf"], [1, "budgetStatus", 2, "background-color", "rgb(85, 194, 91)", 3, "ngStyle"], [1, "budgetStatus", 2, "background-color", "#f3aaa1", 3, "ngStyle"], [3, "ngValue"], ["align", "end"], ["mat-button", "", "matDialogClose", "yes", 1, "fa", "fa-window-close", 2, "font-size", "32px"], [2, "padding", ".5em", "margin-top", "-70px"], [3, "formGroup"], [1, "col-12"], ["type", "text", "formControlName", "incomeAmount"], ["type", "date", "formControlName", "incomeDate"], [2, "color", "red", "width", "100%", "padding", "1em"], [1, "col-12", "mt-2"], ["matDialogClose", "yes", 2, "float", "right", 3, "click"], [2, "margin-top", "-50px"], [1, "container-fluid", "justify-content-center", 2, "margin-top", "25px"], [2, "float", "right"], [1, "col-12", "mt-3"], ["type", "text", "formControlName", "transactionAmount"], ["formControlName", "transactionCategory", 3, "ngModel", "ngModelChange"], ["type", "date", "formControlName", "transactionDate"], [2, "float", "right", 3, "click"], ["matDialogClose", "yes", 2, "float", "right", "margin-right", "15px"], [1, "container-fluid", "justify-content-center", 2, "margin-top", "-25px"], [1, "col-12", 2, "margin-top", "75px"], ["type", "text", "name", "categoryName", 3, "ngModel", "ngModelChange"], [2, "color", "red"], [2, "float", "right", "margin-top", "5px", 3, "click"], [1, "col-12", 2, "margin-top", "25px"], ["name", "categoryName", 3, "ngModel", "ngModelChange"], [2, "margin-top", "5px", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_7_listener() { return ctx.showIncomeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Manage Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_28_listener() { return ctx.showTransactionDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Add Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DashboardComponent_div_30_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Budget History");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_select_ngModelChange_36_listener($event) { return ctx.selectedArchive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DashboardComponent_option_37_Template, 3, 5, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_38_listener() { return ctx.viewSelectedArchive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, DashboardComponent_ng_template_41_Template, 19, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DashboardComponent_ng_template_43_Template, 32, 5, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DashboardComponent_ng_template_45_Template, 22, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.amountEarned);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.balance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.amountSpent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 7, ctx.date, "MMMM YYYY"), " Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedArchive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.budgetHistory);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]], styles: [".balanceInfo[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n    padding: 2em;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.budgetContainer[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.budgetProgress[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    padding: 2em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-weight: 100;\r\n}\r\n\r\n.budgetItem[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    height: 8px;\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n.budgetStatus[_ngcontent-%COMP%] {\r\n    height: 7px;\r\n    color:white;\r\n    background-color: blue;\r\n    max-width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWxhbmNlSW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1ZGdldENvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4uYnVkZ2V0UHJvZ3Jlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uYnVkZ2V0SXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uYnVkZ2V0U3RhdHVzIHtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _services_budget_service__WEBPACK_IMPORTED_MODULE_6__["BudgetService"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { addIncomeDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addIncomeDialog']
        }], addTransactionDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addTransactionDialog']
        }], manageCategoryDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['manageCategoryDialog']
        }] }); })();


/***/ }),

/***/ "SEfn":
/*!*************************************************!*\
  !*** ./src/app/shared/models/category.model.ts ***!
  \*************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'penny-budget';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material/material.module */ "jAig");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth.interceptor */ "bJgF");
/* harmony import */ var _account_activity_account_activity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account-activity/account-activity.component */ "KBZI");
/* harmony import */ var _manage_budget_manage_budget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage-budget/manage-budget.component */ "09y6");
/* harmony import */ var _budget_history_budget_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./budget-history/budget-history.component */ "h/w3");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
        _account_activity_account_activity_component__WEBPACK_IMPORTED_MODULE_13__["AccountActivityComponent"],
        _manage_budget_manage_budget_component__WEBPACK_IMPORTED_MODULE_14__["ManageBudgetComponent"],
        _budget_history_budget_history_component__WEBPACK_IMPORTED_MODULE_15__["BudgetHistoryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                    _account_activity_account_activity_component__WEBPACK_IMPORTED_MODULE_13__["AccountActivityComponent"],
                    _manage_budget_manage_budget_component__WEBPACK_IMPORTED_MODULE_14__["ManageBudgetComponent"],
                    _budget_history_budget_history_component__WEBPACK_IMPORTED_MODULE_15__["BudgetHistoryComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bJgF":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const authToken = this.authService.getToken();
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "eWok":
/*!***********************************************!*\
  !*** ./src/app/shared/models/budget.model.ts ***!
  \***********************************************/
/*! exports provided: Budget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Budget", function() { return Budget; });
class Budget {
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
    isLoggedIn() {
        return this.auth.isLoggedIn;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "header"], [3, "click", 4, "ngIf"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: rgb(2, 73, 2);\r\n    padding: .7em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: rgb(2, 73, 2);\r\n    color: white;\r\n    border: 1px solid rgb(2, 73, 2);\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFlBQVk7QUFDaEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDczLCAyKTtcclxuICAgIHBhZGRpbmc6IC43ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgNzMsIDIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIsIDczLCAyKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "flj8":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AccountService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAccount(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getAccount', { "username": username });
    }
    getAmountEarned(username, month, year) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getAmountEarned', { "username": username, "month": month, "year": year });
    }
    getTotalSpentByCategory(username, month, year) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/getTotalSpentByCategory', { "username": username, "month": month, "year": year });
    }
    getTransactionHistory(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/getTransactionHistory", { "username": username });
    }
    addTransaction(transaction) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/addTransaction', { transaction });
    }
    deleteTransaction(transaction) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: {
                transaction: transaction
            }
        };
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/deleteTransaction', options);
    }
    archiveAccount(username) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/archiveAccount', { "username": username });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "h/w3":
/*!************************************************************!*\
  !*** ./src/app/budget-history/budget-history.component.ts ***!
  \************************************************************/
/*! exports provided: BudgetHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetHistoryComponent", function() { return BudgetHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/budget.service */ "QKEp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account.service */ "flj8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BudgetHistoryComponent_tr_20_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, budget_r1.budgetSpent));
} }
function BudgetHistoryComponent_tr_20_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, budget_r1.budgetSpent));
} }
function BudgetHistoryComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BudgetHistoryComponent_tr_20_span_7_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BudgetHistoryComponent_tr_20_span_8_Template, 3, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](budget_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, budget_r1.budgetAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", budget_r1.budgetSpent < budget_r1.budgetAmount || budget_r1.budgetSpent == budget_r1.budgetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", budget_r1.budgetSpent > budget_r1.budgetAmount);
} }
class BudgetHistoryComponent {
    constructor(budgetService, router, accountService) {
        this.budgetService = budgetService;
        this.router = router;
        this.accountService = accountService;
        this.budgetArchive = [];
        this.totalBudget = 0;
        this.totalSpent = 0;
        this.currentUser = sessionStorage.getItem('username');
        this.month = Number(this.router.snapshot.paramMap.get('month'));
        this.year = Number(this.router.snapshot.paramMap.get('year'));
        this.budgetDate = new Date(this.year, this.month, 0, 1);
        this.getBudgetArchive();
        this.getIncome();
        this.budgetService.getRemainingBalance(this.currentUser, this.month, this.year).subscribe(value => {
            this.remainingBalance = Number(value);
        });
    }
    getBudgetArchive() {
        this.budgetArchive = [];
        this.budgetService.getBudgetArchive(this.currentUser, this.month, this.year).subscribe(value => {
            console.log(value);
            Object.keys(value).forEach((key) => {
                this.budgetArchive.push(value[key]);
                this.totalBudget += value[key].budgetAmount;
                this.totalSpent += value[key].budgetSpent;
            });
        });
    }
    getIncome() {
        this.accountService.getAmountEarned(this.currentUser, this.month, this.year).subscribe(value => {
            this.income = Number(value);
        });
    }
    ngOnInit() {
    }
}
BudgetHistoryComponent.ɵfac = function BudgetHistoryComponent_Factory(t) { return new (t || BudgetHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_budget_service__WEBPACK_IMPORTED_MODULE_1__["BudgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
BudgetHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetHistoryComponent, selectors: [["app-budget-history"]], decls: 45, vars: 17, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-9", "m-5"], ["aria-label", "breadcrumb", 2, "margin-top", "-25px"], [1, "breadcrumb", 2, "background-color", "white", "padding-top", "1em"], [1, "breadcrumb-item"], ["href", "dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "budgetTable", 2, "margin-top", "10px"], [4, "ngFor", "ngForOf"], ["style", "color:green;", 4, "ngIf"], ["style", "color:red;", 4, "ngIf"], [2, "color", "green"], [2, "color", "red"]], template: function BudgetHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Budget History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BudgetHistoryComponent_tr_20_Template, 9, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Remaining Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 6, ctx.budgetDate, "MMMM YYYY"), " Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgetArchive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 9, ctx.income));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 11, ctx.totalBudget));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 13, ctx.totalSpent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 15, ctx.remainingBalance));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-budget-history',
                templateUrl: './budget-history.component.html',
                styleUrls: ['./budget-history.component.css']
            }]
    }], function () { return [{ type: _services_budget_service__WEBPACK_IMPORTED_MODULE_1__["BudgetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





// https://www.positronx.io/angular-jwt-user-authentication-tutorial/
class AuthService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    login(username, password) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + "/login", JSON.stringify({ username, password }))
            .subscribe((res) => {
            localStorage.setItem('access_token', res.access_token);
            sessionStorage.setItem('username', res.username);
            this.router.navigate(['dashboard']);
        });
    }
    logout() {
        let token = localStorage.removeItem('access_token');
        sessionStorage.removeItem('username');
        if (token == null) {
            this.router.navigate(['']);
        }
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_activity_account_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-activity/account-activity.component */ "KBZI");
/* harmony import */ var _budget_history_budget_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget-history/budget-history.component */ "h/w3");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _manage_budget_manage_budget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-budget/manage-budget.component */ "09y6");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");










// https://www.positronx.io/angular-jwt-user-authentication-tutorial/
const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'account-activity', component: _account_activity_account_activity_component__WEBPACK_IMPORTED_MODULE_2__["AccountActivityComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'manage-budget', component: _manage_budget_manage_budget_component__WEBPACK_IMPORTED_MODULE_6__["ManageBudgetComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'budget-history/:month/:year', component: _budget_history_budget_history_component__WEBPACK_IMPORTED_MODULE_3__["BudgetHistoryComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/account.service */ "flj8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(authService, router, accountService) {
        this.authService = authService;
        this.router = router;
        this.accountService = accountService;
        this.setLoginForm();
    }
    setLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        let emailField = this.loginForm.get('email');
        let passwordField = this.loginForm.get('password');
        if (emailField.errors != null || passwordField.errors != null) {
            this.errorMessage = "Incorrect email or password.";
        }
        else {
            this.authService.login(emailField.value, passwordField.value);
            if (!this.authService.isLoggedIn) {
                setTimeout(() => { this.errorMessage = "Incorrect email or password."; }, 1000);
            }
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-5", "login"], [2, "width", "100%", "text-align", "center"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "email", "placeholder", "Email", "formControlName", "email"], ["type", "text", "id", "password", "placeholder", "Password", "formControlName", "password"], ["type", "submit"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".login[_ngcontent-%COMP%] {\r\n   \r\n    margin-top: 100px;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyw0QkFBNEI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xyXG4gICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map