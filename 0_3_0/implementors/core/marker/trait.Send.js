(function() {var implementors = {};
implementors["const_sha1"] = [{"text":"impl Send for ConstBuffer","synthetic":true,"types":[]},{"text":"impl Send for Digest","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl !Send for IntoIter","synthetic":true,"types":[]},{"text":"impl !Send for TokenStream","synthetic":true,"types":[]},{"text":"impl !Send for LexError","synthetic":true,"types":[]},{"text":"impl !Send for Span","synthetic":true,"types":[]},{"text":"impl !Send for TokenTree","synthetic":true,"types":[]},{"text":"impl !Send for Group","synthetic":true,"types":[]},{"text":"impl Send for Delimiter","synthetic":true,"types":[]},{"text":"impl !Send for Punct","synthetic":true,"types":[]},{"text":"impl Send for Spacing","synthetic":true,"types":[]},{"text":"impl !Send for Ident","synthetic":true,"types":[]},{"text":"impl !Send for Literal","synthetic":true,"types":[]}];
implementors["squote"] = [{"text":"impl Send for TokenStream","synthetic":true,"types":[]},{"text":"impl Send for Ident","synthetic":true,"types":[]},{"text":"impl Send for Delimiter","synthetic":true,"types":[]},{"text":"impl Send for Literal","synthetic":true,"types":[]}];
implementors["strum"] = [{"text":"impl Send for ParseError","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl !Send for Underscore","synthetic":true,"types":[]},{"text":"impl !Send for Abstract","synthetic":true,"types":[]},{"text":"impl !Send for As","synthetic":true,"types":[]},{"text":"impl !Send for Async","synthetic":true,"types":[]},{"text":"impl !Send for Auto","synthetic":true,"types":[]},{"text":"impl !Send for Await","synthetic":true,"types":[]},{"text":"impl !Send for Become","synthetic":true,"types":[]},{"text":"impl !Send for Box","synthetic":true,"types":[]},{"text":"impl !Send for Break","synthetic":true,"types":[]},{"text":"impl !Send for Const","synthetic":true,"types":[]},{"text":"impl !Send for Continue","synthetic":true,"types":[]},{"text":"impl !Send for Crate","synthetic":true,"types":[]},{"text":"impl !Send for Default","synthetic":true,"types":[]},{"text":"impl !Send for Do","synthetic":true,"types":[]},{"text":"impl !Send for Dyn","synthetic":true,"types":[]},{"text":"impl !Send for Else","synthetic":true,"types":[]},{"text":"impl !Send for Enum","synthetic":true,"types":[]},{"text":"impl !Send for Extern","synthetic":true,"types":[]},{"text":"impl !Send for Final","synthetic":true,"types":[]},{"text":"impl !Send for Fn","synthetic":true,"types":[]},{"text":"impl !Send for For","synthetic":true,"types":[]},{"text":"impl !Send for If","synthetic":true,"types":[]},{"text":"impl !Send for Impl","synthetic":true,"types":[]},{"text":"impl !Send for In","synthetic":true,"types":[]},{"text":"impl !Send for Let","synthetic":true,"types":[]},{"text":"impl !Send for Loop","synthetic":true,"types":[]},{"text":"impl !Send for Macro","synthetic":true,"types":[]},{"text":"impl !Send for Match","synthetic":true,"types":[]},{"text":"impl !Send for Mod","synthetic":true,"types":[]},{"text":"impl !Send for Move","synthetic":true,"types":[]},{"text":"impl !Send for Mut","synthetic":true,"types":[]},{"text":"impl !Send for Override","synthetic":true,"types":[]},{"text":"impl !Send for Priv","synthetic":true,"types":[]},{"text":"impl !Send for Pub","synthetic":true,"types":[]},{"text":"impl !Send for Ref","synthetic":true,"types":[]},{"text":"impl !Send for Return","synthetic":true,"types":[]},{"text":"impl !Send for SelfType","synthetic":true,"types":[]},{"text":"impl !Send for SelfValue","synthetic":true,"types":[]},{"text":"impl !Send for Static","synthetic":true,"types":[]},{"text":"impl !Send for Struct","synthetic":true,"types":[]},{"text":"impl !Send for Super","synthetic":true,"types":[]},{"text":"impl !Send for Trait","synthetic":true,"types":[]},{"text":"impl !Send for Try","synthetic":true,"types":[]},{"text":"impl !Send for Type","synthetic":true,"types":[]},{"text":"impl !Send for Typeof","synthetic":true,"types":[]},{"text":"impl !Send for Union","synthetic":true,"types":[]},{"text":"impl !Send for Unsafe","synthetic":true,"types":[]},{"text":"impl !Send for Unsized","synthetic":true,"types":[]},{"text":"impl !Send for Use","synthetic":true,"types":[]},{"text":"impl !Send for Virtual","synthetic":true,"types":[]},{"text":"impl !Send for Where","synthetic":true,"types":[]},{"text":"impl !Send for While","synthetic":true,"types":[]},{"text":"impl !Send for Yield","synthetic":true,"types":[]},{"text":"impl !Send for Add","synthetic":true,"types":[]},{"text":"impl !Send for AddEq","synthetic":true,"types":[]},{"text":"impl !Send for And","synthetic":true,"types":[]},{"text":"impl !Send for AndAnd","synthetic":true,"types":[]},{"text":"impl !Send for AndEq","synthetic":true,"types":[]},{"text":"impl !Send for At","synthetic":true,"types":[]},{"text":"impl !Send for Bang","synthetic":true,"types":[]},{"text":"impl !Send for Caret","synthetic":true,"types":[]},{"text":"impl !Send for CaretEq","synthetic":true,"types":[]},{"text":"impl !Send for Colon","synthetic":true,"types":[]},{"text":"impl !Send for Colon2","synthetic":true,"types":[]},{"text":"impl !Send for Comma","synthetic":true,"types":[]},{"text":"impl !Send for Div","synthetic":true,"types":[]},{"text":"impl !Send for DivEq","synthetic":true,"types":[]},{"text":"impl !Send for Dollar","synthetic":true,"types":[]},{"text":"impl !Send for Dot","synthetic":true,"types":[]},{"text":"impl !Send for Dot2","synthetic":true,"types":[]},{"text":"impl !Send for Dot3","synthetic":true,"types":[]},{"text":"impl !Send for DotDotEq","synthetic":true,"types":[]},{"text":"impl !Send for Eq","synthetic":true,"types":[]},{"text":"impl !Send for EqEq","synthetic":true,"types":[]},{"text":"impl !Send for Ge","synthetic":true,"types":[]},{"text":"impl !Send for Gt","synthetic":true,"types":[]},{"text":"impl !Send for Le","synthetic":true,"types":[]},{"text":"impl !Send for Lt","synthetic":true,"types":[]},{"text":"impl !Send for MulEq","synthetic":true,"types":[]},{"text":"impl !Send for Ne","synthetic":true,"types":[]},{"text":"impl !Send for Or","synthetic":true,"types":[]},{"text":"impl !Send for OrEq","synthetic":true,"types":[]},{"text":"impl !Send for OrOr","synthetic":true,"types":[]},{"text":"impl !Send for Pound","synthetic":true,"types":[]},{"text":"impl !Send for Question","synthetic":true,"types":[]},{"text":"impl !Send for RArrow","synthetic":true,"types":[]},{"text":"impl !Send for LArrow","synthetic":true,"types":[]},{"text":"impl !Send for Rem","synthetic":true,"types":[]},{"text":"impl !Send for RemEq","synthetic":true,"types":[]},{"text":"impl !Send for FatArrow","synthetic":true,"types":[]},{"text":"impl !Send for Semi","synthetic":true,"types":[]},{"text":"impl !Send for Shl","synthetic":true,"types":[]},{"text":"impl !Send for ShlEq","synthetic":true,"types":[]},{"text":"impl !Send for Shr","synthetic":true,"types":[]},{"text":"impl !Send for ShrEq","synthetic":true,"types":[]},{"text":"impl !Send for Star","synthetic":true,"types":[]},{"text":"impl !Send for Sub","synthetic":true,"types":[]},{"text":"impl !Send for SubEq","synthetic":true,"types":[]},{"text":"impl !Send for Tilde","synthetic":true,"types":[]},{"text":"impl !Send for Brace","synthetic":true,"types":[]},{"text":"impl !Send for Bracket","synthetic":true,"types":[]},{"text":"impl !Send for Paren","synthetic":true,"types":[]},{"text":"impl !Send for Group","synthetic":true,"types":[]},{"text":"impl !Send for Attribute","synthetic":true,"types":[]},{"text":"impl !Send for AttrStyle","synthetic":true,"types":[]},{"text":"impl !Send for Meta","synthetic":true,"types":[]},{"text":"impl !Send for MetaList","synthetic":true,"types":[]},{"text":"impl !Send for MetaNameValue","synthetic":true,"types":[]},{"text":"impl !Send for NestedMeta","synthetic":true,"types":[]},{"text":"impl !Send for Variant","synthetic":true,"types":[]},{"text":"impl !Send for Fields","synthetic":true,"types":[]},{"text":"impl !Send for FieldsNamed","synthetic":true,"types":[]},{"text":"impl !Send for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl !Send for Field","synthetic":true,"types":[]},{"text":"impl !Send for Visibility","synthetic":true,"types":[]},{"text":"impl !Send for VisPublic","synthetic":true,"types":[]},{"text":"impl !Send for VisCrate","synthetic":true,"types":[]},{"text":"impl !Send for VisRestricted","synthetic":true,"types":[]},{"text":"impl !Send for Expr","synthetic":true,"types":[]},{"text":"impl !Send for ExprArray","synthetic":true,"types":[]},{"text":"impl !Send for ExprAssign","synthetic":true,"types":[]},{"text":"impl !Send for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl !Send for ExprAsync","synthetic":true,"types":[]},{"text":"impl !Send for ExprAwait","synthetic":true,"types":[]},{"text":"impl !Send for ExprBinary","synthetic":true,"types":[]},{"text":"impl !Send for ExprBlock","synthetic":true,"types":[]},{"text":"impl !Send for ExprBox","synthetic":true,"types":[]},{"text":"impl !Send for ExprBreak","synthetic":true,"types":[]},{"text":"impl !Send for ExprCall","synthetic":true,"types":[]},{"text":"impl !Send for ExprCast","synthetic":true,"types":[]},{"text":"impl !Send for ExprClosure","synthetic":true,"types":[]},{"text":"impl !Send for ExprContinue","synthetic":true,"types":[]},{"text":"impl !Send for ExprField","synthetic":true,"types":[]},{"text":"impl !Send for ExprForLoop","synthetic":true,"types":[]},{"text":"impl !Send for ExprGroup","synthetic":true,"types":[]},{"text":"impl !Send for ExprIf","synthetic":true,"types":[]},{"text":"impl !Send for ExprIndex","synthetic":true,"types":[]},{"text":"impl !Send for ExprLet","synthetic":true,"types":[]},{"text":"impl !Send for ExprLit","synthetic":true,"types":[]},{"text":"impl !Send for ExprLoop","synthetic":true,"types":[]},{"text":"impl !Send for ExprMacro","synthetic":true,"types":[]},{"text":"impl !Send for ExprMatch","synthetic":true,"types":[]},{"text":"impl !Send for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl !Send for ExprParen","synthetic":true,"types":[]},{"text":"impl !Send for ExprPath","synthetic":true,"types":[]},{"text":"impl !Send for ExprRange","synthetic":true,"types":[]},{"text":"impl !Send for ExprReference","synthetic":true,"types":[]},{"text":"impl !Send for ExprRepeat","synthetic":true,"types":[]},{"text":"impl !Send for ExprReturn","synthetic":true,"types":[]},{"text":"impl !Send for ExprStruct","synthetic":true,"types":[]},{"text":"impl !Send for ExprTry","synthetic":true,"types":[]},{"text":"impl !Send for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl !Send for ExprTuple","synthetic":true,"types":[]},{"text":"impl !Send for ExprType","synthetic":true,"types":[]},{"text":"impl !Send for ExprUnary","synthetic":true,"types":[]},{"text":"impl !Send for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl !Send for ExprWhile","synthetic":true,"types":[]},{"text":"impl !Send for ExprYield","synthetic":true,"types":[]},{"text":"impl !Send for Member","synthetic":true,"types":[]},{"text":"impl !Send for Index","synthetic":true,"types":[]},{"text":"impl !Send for MethodTurbofish","synthetic":true,"types":[]},{"text":"impl !Send for GenericMethodArgument","synthetic":true,"types":[]},{"text":"impl !Send for FieldValue","synthetic":true,"types":[]},{"text":"impl !Send for Label","synthetic":true,"types":[]},{"text":"impl !Send for Arm","synthetic":true,"types":[]},{"text":"impl !Send for RangeLimits","synthetic":true,"types":[]},{"text":"impl !Send for Generics","synthetic":true,"types":[]},{"text":"impl !Send for GenericParam","synthetic":true,"types":[]},{"text":"impl !Send for TypeParam","synthetic":true,"types":[]},{"text":"impl !Send for LifetimeDef","synthetic":true,"types":[]},{"text":"impl !Send for ConstParam","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Send for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl !Send for TypeParamBound","synthetic":true,"types":[]},{"text":"impl !Send for TraitBound","synthetic":true,"types":[]},{"text":"impl !Send for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl !Send for WhereClause","synthetic":true,"types":[]},{"text":"impl !Send for WherePredicate","synthetic":true,"types":[]},{"text":"impl !Send for PredicateType","synthetic":true,"types":[]},{"text":"impl !Send for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl !Send for PredicateEq","synthetic":true,"types":[]},{"text":"impl !Send for Item","synthetic":true,"types":[]},{"text":"impl !Send for ItemConst","synthetic":true,"types":[]},{"text":"impl !Send for ItemEnum","synthetic":true,"types":[]},{"text":"impl !Send for ItemExternCrate","synthetic":true,"types":[]},{"text":"impl !Send for ItemFn","synthetic":true,"types":[]},{"text":"impl !Send for ItemForeignMod","synthetic":true,"types":[]},{"text":"impl !Send for ItemImpl","synthetic":true,"types":[]},{"text":"impl !Send for ItemMacro","synthetic":true,"types":[]},{"text":"impl !Send for ItemMacro2","synthetic":true,"types":[]},{"text":"impl !Send for ItemMod","synthetic":true,"types":[]},{"text":"impl !Send for ItemStatic","synthetic":true,"types":[]},{"text":"impl !Send for ItemStruct","synthetic":true,"types":[]},{"text":"impl !Send for ItemTrait","synthetic":true,"types":[]},{"text":"impl !Send for ItemTraitAlias","synthetic":true,"types":[]},{"text":"impl !Send for ItemType","synthetic":true,"types":[]},{"text":"impl !Send for ItemUnion","synthetic":true,"types":[]},{"text":"impl !Send for ItemUse","synthetic":true,"types":[]},{"text":"impl !Send for UseTree","synthetic":true,"types":[]},{"text":"impl !Send for UsePath","synthetic":true,"types":[]},{"text":"impl !Send for UseName","synthetic":true,"types":[]},{"text":"impl !Send for UseRename","synthetic":true,"types":[]},{"text":"impl !Send for UseGlob","synthetic":true,"types":[]},{"text":"impl !Send for UseGroup","synthetic":true,"types":[]},{"text":"impl !Send for ForeignItem","synthetic":true,"types":[]},{"text":"impl !Send for ForeignItemFn","synthetic":true,"types":[]},{"text":"impl !Send for ForeignItemStatic","synthetic":true,"types":[]},{"text":"impl !Send for ForeignItemType","synthetic":true,"types":[]},{"text":"impl !Send for ForeignItemMacro","synthetic":true,"types":[]},{"text":"impl !Send for TraitItem","synthetic":true,"types":[]},{"text":"impl !Send for TraitItemConst","synthetic":true,"types":[]},{"text":"impl !Send for TraitItemMethod","synthetic":true,"types":[]},{"text":"impl !Send for TraitItemType","synthetic":true,"types":[]},{"text":"impl !Send for TraitItemMacro","synthetic":true,"types":[]},{"text":"impl !Send for ImplItem","synthetic":true,"types":[]},{"text":"impl !Send for ImplItemConst","synthetic":true,"types":[]},{"text":"impl !Send for ImplItemMethod","synthetic":true,"types":[]},{"text":"impl !Send for ImplItemType","synthetic":true,"types":[]},{"text":"impl !Send for ImplItemMacro","synthetic":true,"types":[]},{"text":"impl !Send for Signature","synthetic":true,"types":[]},{"text":"impl !Send for FnArg","synthetic":true,"types":[]},{"text":"impl !Send for Receiver","synthetic":true,"types":[]},{"text":"impl !Send for File","synthetic":true,"types":[]},{"text":"impl !Send for Lifetime","synthetic":true,"types":[]},{"text":"impl !Send for Lit","synthetic":true,"types":[]},{"text":"impl !Send for LitStr","synthetic":true,"types":[]},{"text":"impl !Send for LitByteStr","synthetic":true,"types":[]},{"text":"impl !Send for LitByte","synthetic":true,"types":[]},{"text":"impl !Send for LitChar","synthetic":true,"types":[]},{"text":"impl !Send for LitInt","synthetic":true,"types":[]},{"text":"impl !Send for LitFloat","synthetic":true,"types":[]},{"text":"impl !Send for LitBool","synthetic":true,"types":[]},{"text":"impl Send for StrStyle","synthetic":true,"types":[]},{"text":"impl !Send for Macro","synthetic":true,"types":[]},{"text":"impl !Send for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl !Send for DeriveInput","synthetic":true,"types":[]},{"text":"impl !Send for Data","synthetic":true,"types":[]},{"text":"impl !Send for DataStruct","synthetic":true,"types":[]},{"text":"impl !Send for DataEnum","synthetic":true,"types":[]},{"text":"impl !Send for DataUnion","synthetic":true,"types":[]},{"text":"impl !Send for BinOp","synthetic":true,"types":[]},{"text":"impl !Send for UnOp","synthetic":true,"types":[]},{"text":"impl !Send for Block","synthetic":true,"types":[]},{"text":"impl !Send for Stmt","synthetic":true,"types":[]},{"text":"impl !Send for Local","synthetic":true,"types":[]},{"text":"impl !Send for Type","synthetic":true,"types":[]},{"text":"impl !Send for TypeArray","synthetic":true,"types":[]},{"text":"impl !Send for TypeBareFn","synthetic":true,"types":[]},{"text":"impl !Send for TypeGroup","synthetic":true,"types":[]},{"text":"impl !Send for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl !Send for TypeInfer","synthetic":true,"types":[]},{"text":"impl !Send for TypeMacro","synthetic":true,"types":[]},{"text":"impl !Send for TypeNever","synthetic":true,"types":[]},{"text":"impl !Send for TypeParen","synthetic":true,"types":[]},{"text":"impl !Send for TypePath","synthetic":true,"types":[]},{"text":"impl !Send for TypePtr","synthetic":true,"types":[]},{"text":"impl !Send for TypeReference","synthetic":true,"types":[]},{"text":"impl !Send for TypeSlice","synthetic":true,"types":[]},{"text":"impl !Send for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl !Send for TypeTuple","synthetic":true,"types":[]},{"text":"impl !Send for Abi","synthetic":true,"types":[]},{"text":"impl !Send for BareFnArg","synthetic":true,"types":[]},{"text":"impl !Send for Variadic","synthetic":true,"types":[]},{"text":"impl !Send for ReturnType","synthetic":true,"types":[]},{"text":"impl !Send for Pat","synthetic":true,"types":[]},{"text":"impl !Send for PatBox","synthetic":true,"types":[]},{"text":"impl !Send for PatIdent","synthetic":true,"types":[]},{"text":"impl !Send for PatLit","synthetic":true,"types":[]},{"text":"impl !Send for PatMacro","synthetic":true,"types":[]},{"text":"impl !Send for PatOr","synthetic":true,"types":[]},{"text":"impl !Send for PatPath","synthetic":true,"types":[]},{"text":"impl !Send for PatRange","synthetic":true,"types":[]},{"text":"impl !Send for PatReference","synthetic":true,"types":[]},{"text":"impl !Send for PatRest","synthetic":true,"types":[]},{"text":"impl !Send for PatSlice","synthetic":true,"types":[]},{"text":"impl !Send for PatStruct","synthetic":true,"types":[]},{"text":"impl !Send for PatTuple","synthetic":true,"types":[]},{"text":"impl !Send for PatTupleStruct","synthetic":true,"types":[]},{"text":"impl !Send for PatType","synthetic":true,"types":[]},{"text":"impl !Send for PatWild","synthetic":true,"types":[]},{"text":"impl !Send for FieldPat","synthetic":true,"types":[]},{"text":"impl !Send for Path","synthetic":true,"types":[]},{"text":"impl !Send for PathSegment","synthetic":true,"types":[]},{"text":"impl !Send for PathArguments","synthetic":true,"types":[]},{"text":"impl !Send for GenericArgument","synthetic":true,"types":[]},{"text":"impl !Send for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Send for Binding","synthetic":true,"types":[]},{"text":"impl !Send for Constraint","synthetic":true,"types":[]},{"text":"impl !Send for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Send for QSelf","synthetic":true,"types":[]},{"text":"impl !Send for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Send for Pairs&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Send for PairsMut&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; !Send for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Nothing","synthetic":true,"types":[]}];
implementors["unicode_segmentation"] = [{"text":"impl&lt;'a&gt; Send for GraphemeIndices&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Graphemes&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GraphemeCursor","synthetic":true,"types":[]},{"text":"impl Send for GraphemeIncomplete","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnicodeWords&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UWordBounds&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UWordBoundIndices&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnicodeSentences&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for USentenceBounds&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for USentenceBoundIndices&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["windows"] = [{"text":"impl !Send for IActivationFactory","synthetic":true,"types":[]},{"text":"impl !Send for IAgileObject","synthetic":true,"types":[]},{"text":"impl !Send for Object","synthetic":true,"types":[]},{"text":"impl !Send for IUnknown","synthetic":true,"types":[]},{"text":"impl Send for BOOL","synthetic":true,"types":[]},{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ErrorCode","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Array&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, I&gt; Send for FactoryCache&lt;C, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Guid","synthetic":true,"types":[]},{"text":"impl Send for RefCount","synthetic":true,"types":[]},{"text":"impl !Send for Waiter","synthetic":true,"types":[]},{"text":"impl !Send for BString","synthetic":true,"types":[]},{"text":"impl !Send for CoString","synthetic":true,"types":[]},{"text":"impl !Send for HString","synthetic":true,"types":[]},{"text":"impl Send for NOT_YET_SUPPORTED_TYPE","synthetic":true,"types":[]}];
implementors["windows_gen"] = [{"text":"impl Send for Callback","synthetic":true,"types":[]},{"text":"impl Send for Class","synthetic":true,"types":[]},{"text":"impl Send for ComInterface","synthetic":true,"types":[]},{"text":"impl Send for Constant","synthetic":true,"types":[]},{"text":"impl Send for ConstantValue","synthetic":true,"types":[]},{"text":"impl Send for Delegate","synthetic":true,"types":[]},{"text":"impl Send for Enum","synthetic":true,"types":[]},{"text":"impl Send for EnumConstant","synthetic":true,"types":[]},{"text":"impl Send for Function","synthetic":true,"types":[]},{"text":"impl Send for Interface","synthetic":true,"types":[]},{"text":"impl Send for InterfaceKind","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for MethodKind","synthetic":true,"types":[]},{"text":"impl Send for RequiredInterface","synthetic":true,"types":[]},{"text":"impl Send for Signature","synthetic":true,"types":[]},{"text":"impl Send for Struct","synthetic":true,"types":[]},{"text":"impl Send for Type","synthetic":true,"types":[]},{"text":"impl Send for TypeKind","synthetic":true,"types":[]},{"text":"impl Send for TypeDefinition","synthetic":true,"types":[]},{"text":"impl Send for TypeGuid","synthetic":true,"types":[]},{"text":"impl Send for GuidConstant","synthetic":true,"types":[]},{"text":"impl Send for TypeLimits","synthetic":true,"types":[]},{"text":"impl Send for NamespaceTypes","synthetic":true,"types":[]},{"text":"impl Send for TypeLimit","synthetic":true,"types":[]},{"text":"impl Send for TypeName","synthetic":true,"types":[]},{"text":"impl Send for TypeNamespaces","synthetic":true,"types":[]},{"text":"impl Send for TypeTree","synthetic":true,"types":[]}];
implementors["windows_winmd"] = [{"text":"impl Send for File","synthetic":true,"types":[]},{"text":"impl Send for TableIndex","synthetic":true,"types":[]},{"text":"impl Send for Attribute","synthetic":true,"types":[]},{"text":"impl Send for Blob","synthetic":true,"types":[]},{"text":"impl Send for TypeDefOrRef","synthetic":true,"types":[]},{"text":"impl Send for TypeOrMethodDef","synthetic":true,"types":[]},{"text":"impl Send for HasAttribute","synthetic":true,"types":[]},{"text":"impl Send for MemberRefParent","synthetic":true,"types":[]},{"text":"impl Send for HasConstant","synthetic":true,"types":[]},{"text":"impl Send for AttributeType","synthetic":true,"types":[]},{"text":"impl Send for MemberForwarded","synthetic":true,"types":[]},{"text":"impl Send for Constant","synthetic":true,"types":[]},{"text":"impl Send for ElementType","synthetic":true,"types":[]},{"text":"impl Send for Field","synthetic":true,"types":[]},{"text":"impl Send for MethodFlags","synthetic":true,"types":[]},{"text":"impl Send for TypeFlags","synthetic":true,"types":[]},{"text":"impl Send for ParamFlags","synthetic":true,"types":[]},{"text":"impl Send for FieldFlags","synthetic":true,"types":[]},{"text":"impl Send for TypeCategory","synthetic":true,"types":[]},{"text":"impl Send for ParamCategory","synthetic":true,"types":[]},{"text":"impl Send for MethodCategory","synthetic":true,"types":[]},{"text":"impl Send for AttributeArg","synthetic":true,"types":[]},{"text":"impl Send for GenericParam","synthetic":true,"types":[]},{"text":"impl Send for ImplMap","synthetic":true,"types":[]},{"text":"impl Send for InterfaceImpl","synthetic":true,"types":[]},{"text":"impl Send for MemberRef","synthetic":true,"types":[]},{"text":"impl Send for MethodDef","synthetic":true,"types":[]},{"text":"impl Send for ModuleRef","synthetic":true,"types":[]},{"text":"impl Send for Param","synthetic":true,"types":[]},{"text":"impl Send for Row","synthetic":true,"types":[]},{"text":"impl Send for TypeDef","synthetic":true,"types":[]},{"text":"impl Send for TypeRef","synthetic":true,"types":[]},{"text":"impl Send for TypeSpec","synthetic":true,"types":[]},{"text":"impl Send for TypeReader","synthetic":true,"types":[]},{"text":"impl Send for Type","synthetic":true,"types":[]}];
implementors["winrt_notification"] = [{"text":"impl Send for Toast","synthetic":true,"types":[]},{"text":"impl Send for Duration","synthetic":true,"types":[]},{"text":"impl Send for Sound","synthetic":true,"types":[]},{"text":"impl Send for LoopableSound","synthetic":true,"types":[]},{"text":"impl Send for IconCrop","synthetic":true,"types":[]}];
implementors["xml"] = [{"text":"impl&lt;'a&gt; Send for Name&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; Send for ReprDisplay&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl Send for OwnedName","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Attribute&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for OwnedAttribute","synthetic":true,"types":[]},{"text":"impl Send for TextPosition","synthetic":true,"types":[]},{"text":"impl Send for XmlVersion","synthetic":true,"types":[]},{"text":"impl Send for Namespace","synthetic":true,"types":[]},{"text":"impl Send for NamespaceStack","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for NamespaceStackMappings&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CheckedTarget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ParserConfig","synthetic":true,"types":[]},{"text":"impl Send for XmlEvent","synthetic":true,"types":[]},{"text":"impl Send for ErrorKind","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for EventReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for Events&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EmitterError","synthetic":true,"types":[]},{"text":"impl Send for EmitterConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for XmlEvent&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for EndElementBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for StartElementBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for EventWriter&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()