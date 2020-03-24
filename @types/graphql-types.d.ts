export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type AuthorJson = Node & {
   __typename?: 'AuthorJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  full_name?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  instagram?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
};

export type AuthorJsonConnection = {
   __typename?: 'AuthorJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorJsonEdge>,
  nodes: Array<AuthorJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<AuthorJsonGroupConnection>,
};


export type AuthorJsonConnectionDistinctArgs = {
  field: AuthorJsonFieldsEnum
};


export type AuthorJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: AuthorJsonFieldsEnum
};

export type AuthorJsonEdge = {
   __typename?: 'AuthorJsonEdge',
  next?: Maybe<AuthorJson>,
  node: AuthorJson,
  previous?: Maybe<AuthorJson>,
};

export enum AuthorJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  FullName = 'full_name',
  Twitter = 'twitter',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Avatar = 'avatar',
  Bio = 'bio'
}

export type AuthorJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  full_name?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
};

export type AuthorJsonFilterListInput = {
  elemMatch?: Maybe<AuthorJsonFilterInput>,
};

export type AuthorJsonGroupConnection = {
   __typename?: 'AuthorJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorJsonEdge>,
  nodes: Array<AuthorJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type AuthorJsonSortInput = {
  fields?: Maybe<Array<Maybe<AuthorJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  url?: Maybe<Scalars['String']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
  childImageSharp?: Maybe<ImageSharp>,
  childrenAuthorJson?: Maybe<Array<Maybe<AuthorJson>>>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Url = 'url',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterTemplate = 'childMarkdownRemark___frontmatter___template',
  ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
  ChildMarkdownRemarkFrontmatterDraft = 'childMarkdownRemark___frontmatter___draft',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsReadingTimeText = 'childMarkdownRemark___fields___readingTime___text',
  ChildMarkdownRemarkFieldsReadingTimeMinutes = 'childMarkdownRemark___fields___readingTime___minutes',
  ChildMarkdownRemarkFieldsReadingTimeTime = 'childMarkdownRemark___fields___readingTime___time',
  ChildMarkdownRemarkFieldsReadingTimeWords = 'childMarkdownRemark___fields___readingTime___words',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenAuthorJson = 'childrenAuthorJson',
  ChildrenAuthorJsonId = 'childrenAuthorJson___id',
  ChildrenAuthorJsonParentId = 'childrenAuthorJson___parent___id',
  ChildrenAuthorJsonParentParentId = 'childrenAuthorJson___parent___parent___id',
  ChildrenAuthorJsonParentParentChildren = 'childrenAuthorJson___parent___parent___children',
  ChildrenAuthorJsonParentChildren = 'childrenAuthorJson___parent___children',
  ChildrenAuthorJsonParentChildrenId = 'childrenAuthorJson___parent___children___id',
  ChildrenAuthorJsonParentChildrenChildren = 'childrenAuthorJson___parent___children___children',
  ChildrenAuthorJsonParentInternalContent = 'childrenAuthorJson___parent___internal___content',
  ChildrenAuthorJsonParentInternalContentDigest = 'childrenAuthorJson___parent___internal___contentDigest',
  ChildrenAuthorJsonParentInternalDescription = 'childrenAuthorJson___parent___internal___description',
  ChildrenAuthorJsonParentInternalFieldOwners = 'childrenAuthorJson___parent___internal___fieldOwners',
  ChildrenAuthorJsonParentInternalIgnoreType = 'childrenAuthorJson___parent___internal___ignoreType',
  ChildrenAuthorJsonParentInternalMediaType = 'childrenAuthorJson___parent___internal___mediaType',
  ChildrenAuthorJsonParentInternalOwner = 'childrenAuthorJson___parent___internal___owner',
  ChildrenAuthorJsonParentInternalType = 'childrenAuthorJson___parent___internal___type',
  ChildrenAuthorJsonChildren = 'childrenAuthorJson___children',
  ChildrenAuthorJsonChildrenId = 'childrenAuthorJson___children___id',
  ChildrenAuthorJsonChildrenParentId = 'childrenAuthorJson___children___parent___id',
  ChildrenAuthorJsonChildrenParentChildren = 'childrenAuthorJson___children___parent___children',
  ChildrenAuthorJsonChildrenChildren = 'childrenAuthorJson___children___children',
  ChildrenAuthorJsonChildrenChildrenId = 'childrenAuthorJson___children___children___id',
  ChildrenAuthorJsonChildrenChildrenChildren = 'childrenAuthorJson___children___children___children',
  ChildrenAuthorJsonChildrenInternalContent = 'childrenAuthorJson___children___internal___content',
  ChildrenAuthorJsonChildrenInternalContentDigest = 'childrenAuthorJson___children___internal___contentDigest',
  ChildrenAuthorJsonChildrenInternalDescription = 'childrenAuthorJson___children___internal___description',
  ChildrenAuthorJsonChildrenInternalFieldOwners = 'childrenAuthorJson___children___internal___fieldOwners',
  ChildrenAuthorJsonChildrenInternalIgnoreType = 'childrenAuthorJson___children___internal___ignoreType',
  ChildrenAuthorJsonChildrenInternalMediaType = 'childrenAuthorJson___children___internal___mediaType',
  ChildrenAuthorJsonChildrenInternalOwner = 'childrenAuthorJson___children___internal___owner',
  ChildrenAuthorJsonChildrenInternalType = 'childrenAuthorJson___children___internal___type',
  ChildrenAuthorJsonInternalContent = 'childrenAuthorJson___internal___content',
  ChildrenAuthorJsonInternalContentDigest = 'childrenAuthorJson___internal___contentDigest',
  ChildrenAuthorJsonInternalDescription = 'childrenAuthorJson___internal___description',
  ChildrenAuthorJsonInternalFieldOwners = 'childrenAuthorJson___internal___fieldOwners',
  ChildrenAuthorJsonInternalIgnoreType = 'childrenAuthorJson___internal___ignoreType',
  ChildrenAuthorJsonInternalMediaType = 'childrenAuthorJson___internal___mediaType',
  ChildrenAuthorJsonInternalOwner = 'childrenAuthorJson___internal___owner',
  ChildrenAuthorJsonInternalType = 'childrenAuthorJson___internal___type',
  ChildrenAuthorJsonFullName = 'childrenAuthorJson___full_name',
  ChildrenAuthorJsonTwitter = 'childrenAuthorJson___twitter',
  ChildrenAuthorJsonInstagram = 'childrenAuthorJson___instagram',
  ChildrenAuthorJsonLinkedin = 'childrenAuthorJson___linkedin',
  ChildrenAuthorJsonAvatar = 'childrenAuthorJson___avatar',
  ChildrenAuthorJsonBio = 'childrenAuthorJson___bio'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childrenAuthorJson?: Maybe<AuthorJsonFilterListInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  id: Scalars['ID'],
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  Id = 'id',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type InstaNode = Node & {
   __typename?: 'InstaNode',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  type?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  likes?: Maybe<Scalars['Int']>,
  caption?: Maybe<Scalars['String']>,
  thumbnails?: Maybe<Array<Maybe<InstaNodeThumbnails>>>,
  mediaType?: Maybe<Scalars['String']>,
  preview?: Maybe<Scalars['String']>,
  original?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['Int']>,
  dimensions?: Maybe<InstaNodeDimensions>,
  comments?: Maybe<Scalars['Int']>,
  localFile?: Maybe<File>,
};

export type InstaNodeConnection = {
   __typename?: 'InstaNodeConnection',
  totalCount: Scalars['Int'],
  edges: Array<InstaNodeEdge>,
  nodes: Array<InstaNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<InstaNodeGroupConnection>,
};


export type InstaNodeConnectionDistinctArgs = {
  field: InstaNodeFieldsEnum
};


export type InstaNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: InstaNodeFieldsEnum
};

export type InstaNodeDimensions = {
   __typename?: 'InstaNodeDimensions',
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
};

export type InstaNodeDimensionsFilterInput = {
  height?: Maybe<IntQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
};

export type InstaNodeEdge = {
   __typename?: 'InstaNodeEdge',
  next?: Maybe<InstaNode>,
  node: InstaNode,
  previous?: Maybe<InstaNode>,
};

export enum InstaNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Username = 'username',
  Likes = 'likes',
  Caption = 'caption',
  Thumbnails = 'thumbnails',
  ThumbnailsSrc = 'thumbnails___src',
  ThumbnailsConfigWidth = 'thumbnails___config_width',
  ThumbnailsConfigHeight = 'thumbnails___config_height',
  MediaType = 'mediaType',
  Preview = 'preview',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  Comments = 'comments',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileIno = 'localFile___ino',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileUrl = 'localFile___url',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  LocalFileChildMarkdownRemarkId = 'localFile___childMarkdownRemark___id',
  LocalFileChildMarkdownRemarkFrontmatterTitle = 'localFile___childMarkdownRemark___frontmatter___title',
  LocalFileChildMarkdownRemarkFrontmatterTemplate = 'localFile___childMarkdownRemark___frontmatter___template',
  LocalFileChildMarkdownRemarkFrontmatterSlug = 'localFile___childMarkdownRemark___frontmatter___slug',
  LocalFileChildMarkdownRemarkFrontmatterDraft = 'localFile___childMarkdownRemark___frontmatter___draft',
  LocalFileChildMarkdownRemarkFrontmatterDescription = 'localFile___childMarkdownRemark___frontmatter___description',
  LocalFileChildMarkdownRemarkExcerpt = 'localFile___childMarkdownRemark___excerpt',
  LocalFileChildMarkdownRemarkRawMarkdownBody = 'localFile___childMarkdownRemark___rawMarkdownBody',
  LocalFileChildMarkdownRemarkFileAbsolutePath = 'localFile___childMarkdownRemark___fileAbsolutePath',
  LocalFileChildMarkdownRemarkFieldsSlug = 'localFile___childMarkdownRemark___fields___slug',
  LocalFileChildMarkdownRemarkHtml = 'localFile___childMarkdownRemark___html',
  LocalFileChildMarkdownRemarkHtmlAst = 'localFile___childMarkdownRemark___htmlAst',
  LocalFileChildMarkdownRemarkExcerptAst = 'localFile___childMarkdownRemark___excerptAst',
  LocalFileChildMarkdownRemarkHeadings = 'localFile___childMarkdownRemark___headings',
  LocalFileChildMarkdownRemarkHeadingsValue = 'localFile___childMarkdownRemark___headings___value',
  LocalFileChildMarkdownRemarkHeadingsDepth = 'localFile___childMarkdownRemark___headings___depth',
  LocalFileChildMarkdownRemarkTimeToRead = 'localFile___childMarkdownRemark___timeToRead',
  LocalFileChildMarkdownRemarkTableOfContents = 'localFile___childMarkdownRemark___tableOfContents',
  LocalFileChildMarkdownRemarkWordCountParagraphs = 'localFile___childMarkdownRemark___wordCount___paragraphs',
  LocalFileChildMarkdownRemarkWordCountSentences = 'localFile___childMarkdownRemark___wordCount___sentences',
  LocalFileChildMarkdownRemarkWordCountWords = 'localFile___childMarkdownRemark___wordCount___words',
  LocalFileChildMarkdownRemarkParentId = 'localFile___childMarkdownRemark___parent___id',
  LocalFileChildMarkdownRemarkParentChildren = 'localFile___childMarkdownRemark___parent___children',
  LocalFileChildMarkdownRemarkChildren = 'localFile___childMarkdownRemark___children',
  LocalFileChildMarkdownRemarkChildrenId = 'localFile___childMarkdownRemark___children___id',
  LocalFileChildMarkdownRemarkChildrenChildren = 'localFile___childMarkdownRemark___children___children',
  LocalFileChildMarkdownRemarkInternalContent = 'localFile___childMarkdownRemark___internal___content',
  LocalFileChildMarkdownRemarkInternalContentDigest = 'localFile___childMarkdownRemark___internal___contentDigest',
  LocalFileChildMarkdownRemarkInternalDescription = 'localFile___childMarkdownRemark___internal___description',
  LocalFileChildMarkdownRemarkInternalFieldOwners = 'localFile___childMarkdownRemark___internal___fieldOwners',
  LocalFileChildMarkdownRemarkInternalIgnoreType = 'localFile___childMarkdownRemark___internal___ignoreType',
  LocalFileChildMarkdownRemarkInternalMediaType = 'localFile___childMarkdownRemark___internal___mediaType',
  LocalFileChildMarkdownRemarkInternalOwner = 'localFile___childMarkdownRemark___internal___owner',
  LocalFileChildMarkdownRemarkInternalType = 'localFile___childMarkdownRemark___internal___type',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileChildrenAuthorJson = 'localFile___childrenAuthorJson',
  LocalFileChildrenAuthorJsonId = 'localFile___childrenAuthorJson___id',
  LocalFileChildrenAuthorJsonParentId = 'localFile___childrenAuthorJson___parent___id',
  LocalFileChildrenAuthorJsonParentChildren = 'localFile___childrenAuthorJson___parent___children',
  LocalFileChildrenAuthorJsonChildren = 'localFile___childrenAuthorJson___children',
  LocalFileChildrenAuthorJsonChildrenId = 'localFile___childrenAuthorJson___children___id',
  LocalFileChildrenAuthorJsonChildrenChildren = 'localFile___childrenAuthorJson___children___children',
  LocalFileChildrenAuthorJsonInternalContent = 'localFile___childrenAuthorJson___internal___content',
  LocalFileChildrenAuthorJsonInternalContentDigest = 'localFile___childrenAuthorJson___internal___contentDigest',
  LocalFileChildrenAuthorJsonInternalDescription = 'localFile___childrenAuthorJson___internal___description',
  LocalFileChildrenAuthorJsonInternalFieldOwners = 'localFile___childrenAuthorJson___internal___fieldOwners',
  LocalFileChildrenAuthorJsonInternalIgnoreType = 'localFile___childrenAuthorJson___internal___ignoreType',
  LocalFileChildrenAuthorJsonInternalMediaType = 'localFile___childrenAuthorJson___internal___mediaType',
  LocalFileChildrenAuthorJsonInternalOwner = 'localFile___childrenAuthorJson___internal___owner',
  LocalFileChildrenAuthorJsonInternalType = 'localFile___childrenAuthorJson___internal___type',
  LocalFileChildrenAuthorJsonFullName = 'localFile___childrenAuthorJson___full_name',
  LocalFileChildrenAuthorJsonTwitter = 'localFile___childrenAuthorJson___twitter',
  LocalFileChildrenAuthorJsonInstagram = 'localFile___childrenAuthorJson___instagram',
  LocalFileChildrenAuthorJsonLinkedin = 'localFile___childrenAuthorJson___linkedin',
  LocalFileChildrenAuthorJsonAvatar = 'localFile___childrenAuthorJson___avatar',
  LocalFileChildrenAuthorJsonBio = 'localFile___childrenAuthorJson___bio'
}

export type InstaNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  type?: Maybe<StringQueryOperatorInput>,
  username?: Maybe<StringQueryOperatorInput>,
  likes?: Maybe<IntQueryOperatorInput>,
  caption?: Maybe<StringQueryOperatorInput>,
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  preview?: Maybe<StringQueryOperatorInput>,
  original?: Maybe<StringQueryOperatorInput>,
  timestamp?: Maybe<IntQueryOperatorInput>,
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>,
  comments?: Maybe<IntQueryOperatorInput>,
  localFile?: Maybe<FileFilterInput>,
};

export type InstaNodeGroupConnection = {
   __typename?: 'InstaNodeGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<InstaNodeEdge>,
  nodes: Array<InstaNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type InstaNodeSortInput = {
  fields?: Maybe<Array<Maybe<InstaNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type InstaNodeThumbnails = {
   __typename?: 'InstaNodeThumbnails',
  src?: Maybe<Scalars['String']>,
  config_width?: Maybe<Scalars['Int']>,
  config_height?: Maybe<Scalars['Int']>,
};

export type InstaNodeThumbnailsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  config_width?: Maybe<IntQueryOperatorInput>,
  config_height?: Maybe<IntQueryOperatorInput>,
};

export type InstaNodeThumbnailsFilterListInput = {
  elemMatch?: Maybe<InstaNodeThumbnailsFilterInput>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  fields?: Maybe<MarkdownRemarkFields>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
   __typename?: 'MarkdownRemarkFields',
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTime>,
  slug?: Maybe<Scalars['String']>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterTemplate = 'frontmatter___template',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterDraft = 'frontmatter___draft',
  FrontmatterDescription = 'frontmatter___description',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsReadingTimeText = 'fields___readingTime___text',
  FieldsReadingTimeMinutes = 'fields___readingTime___minutes',
  FieldsReadingTimeTime = 'fields___readingTime___time',
  FieldsReadingTimeWords = 'fields___readingTime___words',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTimeFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFieldsReadingTime = {
   __typename?: 'MarkdownRemarkFieldsReadingTime',
  text?: Maybe<Scalars['String']>,
  minutes?: Maybe<Scalars['Float']>,
  time?: Maybe<Scalars['Float']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownRemarkFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>,
  minutes?: Maybe<FloatQueryOperatorInput>,
  time?: Maybe<FloatQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  draft?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  draft?: Maybe<BooleanQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  sanityAuthor?: Maybe<SanityAuthor>,
  allSanityAuthor: SanityAuthorConnection,
  sanityCategory?: Maybe<SanityCategory>,
  allSanityCategory: SanityCategoryConnection,
  sanityEpisode?: Maybe<SanityEpisode>,
  allSanityEpisode: SanityEpisodeConnection,
  sanityHost?: Maybe<SanityHost>,
  allSanityHost: SanityHostConnection,
  sanityPodcast?: Maybe<SanityPodcast>,
  allSanityPodcast: SanityPodcastConnection,
  sanityPost?: Maybe<SanityPost>,
  allSanityPost: SanityPostConnection,
  sanityFileAsset?: Maybe<SanityFileAsset>,
  allSanityFileAsset: SanityFileAssetConnection,
  sanityImageAsset?: Maybe<SanityImageAsset>,
  allSanityImageAsset: SanityImageAssetConnection,
  sanitySponsor?: Maybe<SanitySponsor>,
  allSanitySponsor: SanitySponsorConnection,
  file?: Maybe<File>,
  allFile: FileConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  authorJson?: Maybe<AuthorJson>,
  allAuthorJson: AuthorJsonConnection,
  instaNode?: Maybe<InstaNode>,
  allInstaNode: InstaNodeConnection,
};


export type QuerySanityAuthorArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityImageFilterInput>,
  bio?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawBio?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityAuthorArgs = {
  filter?: Maybe<SanityAuthorFilterInput>,
  sort?: Maybe<SanityAuthorSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityCategoryArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityCategoryArgs = {
  filter?: Maybe<SanityCategoryFilterInput>,
  sort?: Maybe<SanityCategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityEpisodeArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  podcast?: Maybe<SanityPodcastFilterListInput>,
  schedule?: Maybe<SanityScheduleFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  file?: Maybe<SanityFileFilterInput>,
  fileUrl?: Maybe<StringQueryOperatorInput>,
  duration?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  explicit?: Maybe<BooleanQueryOperatorInput>,
  summary?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  linkList?: Maybe<SanityLinkListItemFilterListInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  itunes?: Maybe<SanityItunesEpisodeSettingsFilterInput>,
  coverArt?: Maybe<SanityImageFilterInput>,
  sponsors?: Maybe<SanitySponsorReadFilterListInput>,
  content?: Maybe<SanityBlockFilterListInput>,
  _rawPodcast?: Maybe<JsonQueryOperatorInput>,
  _rawSchedule?: Maybe<JsonQueryOperatorInput>,
  _rawFile?: Maybe<JsonQueryOperatorInput>,
  _rawContent?: Maybe<JsonQueryOperatorInput>,
  _rawLinkList?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawItunes?: Maybe<JsonQueryOperatorInput>,
  _rawCoverArt?: Maybe<JsonQueryOperatorInput>,
  _rawSponsors?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityEpisodeArgs = {
  filter?: Maybe<SanityEpisodeFilterInput>,
  sort?: Maybe<SanityEpisodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityHostArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityImageFilterInput>,
  description?: Maybe<SanityBlockFilterListInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityHostArgs = {
  filter?: Maybe<SanityHostFilterInput>,
  sort?: Maybe<SanityHostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityPodcastArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  coverArt?: Maybe<SanityImageFilterInput>,
  copyright?: Maybe<StringQueryOperatorInput>,
  language?: Maybe<StringQueryOperatorInput>,
  explicit?: Maybe<BooleanQueryOperatorInput>,
  itunes?: Maybe<SanityItunesFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawCoverArt?: Maybe<JsonQueryOperatorInput>,
  _rawItunes?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityPodcastArgs = {
  filter?: Maybe<SanityPodcastFilterInput>,
  sort?: Maybe<SanityPodcastSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityPostArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  author?: Maybe<SanityAuthorFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  categories?: Maybe<SanityCategoryFilterListInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawAuthor?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawCategories?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityPostArgs = {
  filter?: Maybe<SanityPostFilterInput>,
  sort?: Maybe<SanityPostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>,
  sort?: Maybe<SanityFileAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>,
  sort?: Maybe<SanityImageAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanitySponsorArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  logo?: Maybe<SanityImageFilterInput>,
  description?: Maybe<SanityBlockFilterListInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanitySponsorArgs = {
  filter?: Maybe<SanitySponsorFilterInput>,
  sort?: Maybe<SanitySponsorSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childrenAuthorJson?: Maybe<AuthorJsonFilterListInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryAuthorJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  full_name?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>
};


export type QueryAllAuthorJsonArgs = {
  filter?: Maybe<AuthorJsonFilterInput>,
  sort?: Maybe<AuthorJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryInstaNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  type?: Maybe<StringQueryOperatorInput>,
  username?: Maybe<StringQueryOperatorInput>,
  likes?: Maybe<IntQueryOperatorInput>,
  caption?: Maybe<StringQueryOperatorInput>,
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  preview?: Maybe<StringQueryOperatorInput>,
  original?: Maybe<StringQueryOperatorInput>,
  timestamp?: Maybe<IntQueryOperatorInput>,
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>,
  comments?: Maybe<IntQueryOperatorInput>,
  localFile?: Maybe<FileFilterInput>
};


export type QueryAllInstaNodeArgs = {
  filter?: Maybe<InstaNodeFilterInput>,
  sort?: Maybe<InstaNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type SanityAuthor = SanityDocument & Node & {
   __typename?: 'SanityAuthor',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  linkedin?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  instagram?: Maybe<Scalars['String']>,
  image?: Maybe<SanityImage>,
  bio?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawImage?: Maybe<Scalars['JSON']>,
  _rawBio?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityAuthor_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityAuthor_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityAuthor_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityAuthor_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityAuthor_RawBioArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityAuthorConnection = {
   __typename?: 'SanityAuthorConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityAuthorEdge>,
  nodes: Array<SanityAuthor>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityAuthorGroupConnection>,
};


export type SanityAuthorConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum
};


export type SanityAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityAuthorFieldsEnum
};

export type SanityAuthorEdge = {
   __typename?: 'SanityAuthorEdge',
  next?: Maybe<SanityAuthor>,
  node: SanityAuthor,
  previous?: Maybe<SanityAuthor>,
};

export enum SanityAuthorFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Name = 'name',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
  Instagram = 'instagram',
  ImageKey = 'image____key',
  ImageType = 'image____type',
  ImageAssetId = 'image___asset____id',
  ImageAssetType = 'image___asset____type',
  ImageAssetCreatedAt = 'image___asset____createdAt',
  ImageAssetUpdatedAt = 'image___asset____updatedAt',
  ImageAssetRev = 'image___asset____rev',
  ImageAssetKey = 'image___asset____key',
  ImageAssetOriginalFilename = 'image___asset___originalFilename',
  ImageAssetLabel = 'image___asset___label',
  ImageAssetSha1hash = 'image___asset___sha1hash',
  ImageAssetExtension = 'image___asset___extension',
  ImageAssetMimeType = 'image___asset___mimeType',
  ImageAssetSize = 'image___asset___size',
  ImageAssetAssetId = 'image___asset___assetId',
  ImageAssetPath = 'image___asset___path',
  ImageAssetUrl = 'image___asset___url',
  ImageAssetMetadataKey = 'image___asset___metadata____key',
  ImageAssetMetadataType = 'image___asset___metadata____type',
  ImageAssetMetadataLqip = 'image___asset___metadata___lqip',
  ImageAssetMetadataHasAlpha = 'image___asset___metadata___hasAlpha',
  ImageAssetMetadataIsOpaque = 'image___asset___metadata___isOpaque',
  ImageAssetFixedBase64 = 'image___asset___fixed___base64',
  ImageAssetFixedAspectRatio = 'image___asset___fixed___aspectRatio',
  ImageAssetFixedWidth = 'image___asset___fixed___width',
  ImageAssetFixedHeight = 'image___asset___fixed___height',
  ImageAssetFixedSrc = 'image___asset___fixed___src',
  ImageAssetFixedSrcSet = 'image___asset___fixed___srcSet',
  ImageAssetFixedSrcWebp = 'image___asset___fixed___srcWebp',
  ImageAssetFixedSrcSetWebp = 'image___asset___fixed___srcSetWebp',
  ImageAssetFluidBase64 = 'image___asset___fluid___base64',
  ImageAssetFluidAspectRatio = 'image___asset___fluid___aspectRatio',
  ImageAssetFluidSrc = 'image___asset___fluid___src',
  ImageAssetFluidSrcSet = 'image___asset___fluid___srcSet',
  ImageAssetFluidSrcWebp = 'image___asset___fluid___srcWebp',
  ImageAssetFluidSrcSetWebp = 'image___asset___fluid___srcSetWebp',
  ImageAssetFluidSizes = 'image___asset___fluid___sizes',
  ImageAssetRawMetadata = 'image___asset____rawMetadata',
  ImageAssetId = 'image___asset___id',
  ImageAssetParentId = 'image___asset___parent___id',
  ImageAssetParentChildren = 'image___asset___parent___children',
  ImageAssetChildren = 'image___asset___children',
  ImageAssetChildrenId = 'image___asset___children___id',
  ImageAssetChildrenChildren = 'image___asset___children___children',
  ImageAssetInternalContent = 'image___asset___internal___content',
  ImageAssetInternalContentDigest = 'image___asset___internal___contentDigest',
  ImageAssetInternalDescription = 'image___asset___internal___description',
  ImageAssetInternalFieldOwners = 'image___asset___internal___fieldOwners',
  ImageAssetInternalIgnoreType = 'image___asset___internal___ignoreType',
  ImageAssetInternalMediaType = 'image___asset___internal___mediaType',
  ImageAssetInternalOwner = 'image___asset___internal___owner',
  ImageAssetInternalType = 'image___asset___internal___type',
  ImageAssetChildImageSharpId = 'image___asset___childImageSharp___id',
  ImageAssetChildImageSharpChildren = 'image___asset___childImageSharp___children',
  ImageHotspotKey = 'image___hotspot____key',
  ImageHotspotType = 'image___hotspot____type',
  ImageHotspotX = 'image___hotspot___x',
  ImageHotspotY = 'image___hotspot___y',
  ImageHotspotHeight = 'image___hotspot___height',
  ImageHotspotWidth = 'image___hotspot___width',
  ImageCropKey = 'image___crop____key',
  ImageCropType = 'image___crop____type',
  ImageCropTop = 'image___crop___top',
  ImageCropBottom = 'image___crop___bottom',
  ImageCropLeft = 'image___crop___left',
  ImageCropRight = 'image___crop___right',
  Bio = 'bio',
  BioKey = 'bio____key',
  BioType = 'bio____type',
  BioSanityChildren = 'bio___sanityChildren',
  BioSanityChildrenKey = 'bio___sanityChildren____key',
  BioSanityChildrenType = 'bio___sanityChildren____type',
  BioSanityChildrenMarks = 'bio___sanityChildren___marks',
  BioSanityChildrenText = 'bio___sanityChildren___text',
  BioStyle = 'bio___style',
  BioList = 'bio___list',
  RawSlug = '_rawSlug',
  RawImage = '_rawImage',
  RawBio = '_rawBio',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityAuthorFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityImageFilterInput>,
  bio?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  _rawBio?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityAuthorGroupConnection = {
   __typename?: 'SanityAuthorGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityAuthorEdge>,
  nodes: Array<SanityAuthor>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityAuthorSortInput = {
  fields?: Maybe<Array<Maybe<SanityAuthorFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityBlock = {
   __typename?: 'SanityBlock',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>,
  style?: Maybe<Scalars['String']>,
  list?: Maybe<Scalars['String']>,
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  sanityChildren?: Maybe<SanitySpanFilterListInput>,
  style?: Maybe<StringQueryOperatorInput>,
  list?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>,
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityCategories = {
   __typename?: 'SanityCategories',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  firstCategory?: Maybe<Scalars['String']>,
  secondaryCategory?: Maybe<Scalars['String']>,
  tertiaryCategory?: Maybe<Scalars['String']>,
};

export type SanityCategoriesFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  firstCategory?: Maybe<StringQueryOperatorInput>,
  secondaryCategory?: Maybe<StringQueryOperatorInput>,
  tertiaryCategory?: Maybe<StringQueryOperatorInput>,
};

export type SanityCategory = SanityDocument & Node & {
   __typename?: 'SanityCategory',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityCategory_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityCategory_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SanityCategoryConnection = {
   __typename?: 'SanityCategoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityCategoryEdge>,
  nodes: Array<SanityCategory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityCategoryGroupConnection>,
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum
};


export type SanityCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityCategoryFieldsEnum
};

export type SanityCategoryEdge = {
   __typename?: 'SanityCategoryEdge',
  next?: Maybe<SanityCategory>,
  node: SanityCategory,
  previous?: Maybe<SanityCategory>,
};

export enum SanityCategoryFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Title = 'title',
  Description = 'description',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityCategoryFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityCategoryFilterListInput = {
  elemMatch?: Maybe<SanityCategoryFilterInput>,
};

export type SanityCategoryGroupConnection = {
   __typename?: 'SanityCategoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityCategoryEdge>,
  nodes: Array<SanityCategory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityCategorySortInput = {
  fields?: Maybe<Array<Maybe<SanityCategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
};

export type SanityEpisode = SanityDocument & Node & {
   __typename?: 'SanityEpisode',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  podcast?: Maybe<Array<Maybe<SanityPodcast>>>,
  schedule?: Maybe<SanitySchedule>,
  featured?: Maybe<Scalars['Boolean']>,
  file?: Maybe<SanityFile>,
  fileUrl?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  explicit?: Maybe<Scalars['Boolean']>,
  summary?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  linkList?: Maybe<Array<Maybe<SanityLinkListItem>>>,
  slug?: Maybe<SanitySlug>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  itunes?: Maybe<SanityItunesEpisodeSettings>,
  coverArt?: Maybe<SanityImage>,
  sponsors?: Maybe<Array<Maybe<SanitySponsorRead>>>,
  content?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawPodcast?: Maybe<Scalars['JSON']>,
  _rawSchedule?: Maybe<Scalars['JSON']>,
  _rawFile?: Maybe<Scalars['JSON']>,
  _rawContent?: Maybe<Scalars['JSON']>,
  _rawLinkList?: Maybe<Scalars['JSON']>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawItunes?: Maybe<Scalars['JSON']>,
  _rawCoverArt?: Maybe<Scalars['JSON']>,
  _rawSponsors?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityEpisode_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityEpisode_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityEpisode_RawPodcastArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawScheduleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawFileArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawLinkListArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawItunesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawCoverArtArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityEpisode_RawSponsorsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityEpisodeConnection = {
   __typename?: 'SanityEpisodeConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityEpisodeEdge>,
  nodes: Array<SanityEpisode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityEpisodeGroupConnection>,
};


export type SanityEpisodeConnectionDistinctArgs = {
  field: SanityEpisodeFieldsEnum
};


export type SanityEpisodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityEpisodeFieldsEnum
};

export type SanityEpisodeEdge = {
   __typename?: 'SanityEpisodeEdge',
  next?: Maybe<SanityEpisode>,
  node: SanityEpisode,
  previous?: Maybe<SanityEpisode>,
};

export enum SanityEpisodeFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Title = 'title',
  Podcast = 'podcast',
  PodcastId = 'podcast____id',
  PodcastType = 'podcast____type',
  PodcastCreatedAt = 'podcast____createdAt',
  PodcastUpdatedAt = 'podcast____updatedAt',
  PodcastRev = 'podcast____rev',
  PodcastKey = 'podcast____key',
  PodcastTitle = 'podcast___title',
  PodcastSubtitle = 'podcast___subtitle',
  PodcastSlugKey = 'podcast___slug____key',
  PodcastSlugType = 'podcast___slug____type',
  PodcastSlugCurrent = 'podcast___slug___current',
  PodcastDescription = 'podcast___description',
  PodcastCoverArtKey = 'podcast___coverArt____key',
  PodcastCoverArtType = 'podcast___coverArt____type',
  PodcastCoverArtAssetId = 'podcast___coverArt___asset____id',
  PodcastCoverArtAssetType = 'podcast___coverArt___asset____type',
  PodcastCoverArtAssetCreatedAt = 'podcast___coverArt___asset____createdAt',
  PodcastCoverArtAssetUpdatedAt = 'podcast___coverArt___asset____updatedAt',
  PodcastCoverArtAssetRev = 'podcast___coverArt___asset____rev',
  PodcastCoverArtAssetKey = 'podcast___coverArt___asset____key',
  PodcastCoverArtAssetOriginalFilename = 'podcast___coverArt___asset___originalFilename',
  PodcastCoverArtAssetLabel = 'podcast___coverArt___asset___label',
  PodcastCoverArtAssetSha1hash = 'podcast___coverArt___asset___sha1hash',
  PodcastCoverArtAssetExtension = 'podcast___coverArt___asset___extension',
  PodcastCoverArtAssetMimeType = 'podcast___coverArt___asset___mimeType',
  PodcastCoverArtAssetSize = 'podcast___coverArt___asset___size',
  PodcastCoverArtAssetAssetId = 'podcast___coverArt___asset___assetId',
  PodcastCoverArtAssetPath = 'podcast___coverArt___asset___path',
  PodcastCoverArtAssetUrl = 'podcast___coverArt___asset___url',
  PodcastCoverArtAssetRawMetadata = 'podcast___coverArt___asset____rawMetadata',
  PodcastCoverArtAssetId = 'podcast___coverArt___asset___id',
  PodcastCoverArtAssetChildren = 'podcast___coverArt___asset___children',
  PodcastCoverArtHotspotKey = 'podcast___coverArt___hotspot____key',
  PodcastCoverArtHotspotType = 'podcast___coverArt___hotspot____type',
  PodcastCoverArtHotspotX = 'podcast___coverArt___hotspot___x',
  PodcastCoverArtHotspotY = 'podcast___coverArt___hotspot___y',
  PodcastCoverArtHotspotHeight = 'podcast___coverArt___hotspot___height',
  PodcastCoverArtHotspotWidth = 'podcast___coverArt___hotspot___width',
  PodcastCoverArtCropKey = 'podcast___coverArt___crop____key',
  PodcastCoverArtCropType = 'podcast___coverArt___crop____type',
  PodcastCoverArtCropTop = 'podcast___coverArt___crop___top',
  PodcastCoverArtCropBottom = 'podcast___coverArt___crop___bottom',
  PodcastCoverArtCropLeft = 'podcast___coverArt___crop___left',
  PodcastCoverArtCropRight = 'podcast___coverArt___crop___right',
  PodcastCopyright = 'podcast___copyright',
  PodcastLanguage = 'podcast___language',
  PodcastExplicit = 'podcast___explicit',
  PodcastItunesKey = 'podcast___itunes____key',
  PodcastItunesType = 'podcast___itunes____type',
  PodcastItunesAuthor = 'podcast___itunes___author',
  PodcastItunesOwnerKey = 'podcast___itunes___owner____key',
  PodcastItunesOwnerType = 'podcast___itunes___owner____type',
  PodcastItunesOwnerEmail = 'podcast___itunes___owner___email',
  PodcastItunesOwnerName = 'podcast___itunes___owner___name',
  PodcastItunesUrl = 'podcast___itunes___url',
  PodcastItunesType = 'podcast___itunes___type',
  PodcastItunesCategoriesKey = 'podcast___itunes___categories____key',
  PodcastItunesCategoriesType = 'podcast___itunes___categories____type',
  PodcastItunesCategoriesFirstCategory = 'podcast___itunes___categories___firstCategory',
  PodcastItunesCategoriesSecondaryCategory = 'podcast___itunes___categories___secondaryCategory',
  PodcastItunesCategoriesTertiaryCategory = 'podcast___itunes___categories___tertiaryCategory',
  PodcastRawSlug = 'podcast____rawSlug',
  PodcastRawCoverArt = 'podcast____rawCoverArt',
  PodcastRawItunes = 'podcast____rawItunes',
  PodcastId = 'podcast___id',
  PodcastParentId = 'podcast___parent___id',
  PodcastParentParentId = 'podcast___parent___parent___id',
  PodcastParentParentChildren = 'podcast___parent___parent___children',
  PodcastParentChildren = 'podcast___parent___children',
  PodcastParentChildrenId = 'podcast___parent___children___id',
  PodcastParentChildrenChildren = 'podcast___parent___children___children',
  PodcastParentInternalContent = 'podcast___parent___internal___content',
  PodcastParentInternalContentDigest = 'podcast___parent___internal___contentDigest',
  PodcastParentInternalDescription = 'podcast___parent___internal___description',
  PodcastParentInternalFieldOwners = 'podcast___parent___internal___fieldOwners',
  PodcastParentInternalIgnoreType = 'podcast___parent___internal___ignoreType',
  PodcastParentInternalMediaType = 'podcast___parent___internal___mediaType',
  PodcastParentInternalOwner = 'podcast___parent___internal___owner',
  PodcastParentInternalType = 'podcast___parent___internal___type',
  PodcastChildren = 'podcast___children',
  PodcastChildrenId = 'podcast___children___id',
  PodcastChildrenParentId = 'podcast___children___parent___id',
  PodcastChildrenParentChildren = 'podcast___children___parent___children',
  PodcastChildrenChildren = 'podcast___children___children',
  PodcastChildrenChildrenId = 'podcast___children___children___id',
  PodcastChildrenChildrenChildren = 'podcast___children___children___children',
  PodcastChildrenInternalContent = 'podcast___children___internal___content',
  PodcastChildrenInternalContentDigest = 'podcast___children___internal___contentDigest',
  PodcastChildrenInternalDescription = 'podcast___children___internal___description',
  PodcastChildrenInternalFieldOwners = 'podcast___children___internal___fieldOwners',
  PodcastChildrenInternalIgnoreType = 'podcast___children___internal___ignoreType',
  PodcastChildrenInternalMediaType = 'podcast___children___internal___mediaType',
  PodcastChildrenInternalOwner = 'podcast___children___internal___owner',
  PodcastChildrenInternalType = 'podcast___children___internal___type',
  PodcastInternalContent = 'podcast___internal___content',
  PodcastInternalContentDigest = 'podcast___internal___contentDigest',
  PodcastInternalDescription = 'podcast___internal___description',
  PodcastInternalFieldOwners = 'podcast___internal___fieldOwners',
  PodcastInternalIgnoreType = 'podcast___internal___ignoreType',
  PodcastInternalMediaType = 'podcast___internal___mediaType',
  PodcastInternalOwner = 'podcast___internal___owner',
  PodcastInternalType = 'podcast___internal___type',
  ScheduleKey = 'schedule____key',
  ScheduleType = 'schedule____type',
  SchedulePublish = 'schedule___publish',
  ScheduleUnpublish = 'schedule___unpublish',
  Featured = 'featured',
  FileKey = 'file____key',
  FileType = 'file____type',
  FileAssetId = 'file___asset____id',
  FileAssetType = 'file___asset____type',
  FileAssetCreatedAt = 'file___asset____createdAt',
  FileAssetUpdatedAt = 'file___asset____updatedAt',
  FileAssetRev = 'file___asset____rev',
  FileAssetKey = 'file___asset____key',
  FileAssetOriginalFilename = 'file___asset___originalFilename',
  FileAssetLabel = 'file___asset___label',
  FileAssetSha1hash = 'file___asset___sha1hash',
  FileAssetExtension = 'file___asset___extension',
  FileAssetMimeType = 'file___asset___mimeType',
  FileAssetSize = 'file___asset___size',
  FileAssetAssetId = 'file___asset___assetId',
  FileAssetPath = 'file___asset___path',
  FileAssetUrl = 'file___asset___url',
  FileAssetId = 'file___asset___id',
  FileAssetParentId = 'file___asset___parent___id',
  FileAssetParentChildren = 'file___asset___parent___children',
  FileAssetChildren = 'file___asset___children',
  FileAssetChildrenId = 'file___asset___children___id',
  FileAssetChildrenChildren = 'file___asset___children___children',
  FileAssetInternalContent = 'file___asset___internal___content',
  FileAssetInternalContentDigest = 'file___asset___internal___contentDigest',
  FileAssetInternalDescription = 'file___asset___internal___description',
  FileAssetInternalFieldOwners = 'file___asset___internal___fieldOwners',
  FileAssetInternalIgnoreType = 'file___asset___internal___ignoreType',
  FileAssetInternalMediaType = 'file___asset___internal___mediaType',
  FileAssetInternalOwner = 'file___asset___internal___owner',
  FileAssetInternalType = 'file___asset___internal___type',
  FileUrl = 'fileUrl',
  Duration = 'duration',
  Subtitle = 'subtitle',
  Explicit = 'explicit',
  Summary = 'summary',
  Description = 'description',
  LinkList = 'linkList',
  LinkListKey = 'linkList____key',
  LinkListType = 'linkList____type',
  LinkListTitle = 'linkList___title',
  LinkListUrl = 'linkList___URL',
  LinkListExcerpt = 'linkList___excerpt',
  LinkListTimestamp = 'linkList___timestamp',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  Tags = 'tags',
  ItunesKey = 'itunes____key',
  ItunesType = 'itunes____type',
  ItunesType = 'itunes___type',
  ItunesSeason = 'itunes___season',
  CoverArtKey = 'coverArt____key',
  CoverArtType = 'coverArt____type',
  CoverArtAssetId = 'coverArt___asset____id',
  CoverArtAssetType = 'coverArt___asset____type',
  CoverArtAssetCreatedAt = 'coverArt___asset____createdAt',
  CoverArtAssetUpdatedAt = 'coverArt___asset____updatedAt',
  CoverArtAssetRev = 'coverArt___asset____rev',
  CoverArtAssetKey = 'coverArt___asset____key',
  CoverArtAssetOriginalFilename = 'coverArt___asset___originalFilename',
  CoverArtAssetLabel = 'coverArt___asset___label',
  CoverArtAssetSha1hash = 'coverArt___asset___sha1hash',
  CoverArtAssetExtension = 'coverArt___asset___extension',
  CoverArtAssetMimeType = 'coverArt___asset___mimeType',
  CoverArtAssetSize = 'coverArt___asset___size',
  CoverArtAssetAssetId = 'coverArt___asset___assetId',
  CoverArtAssetPath = 'coverArt___asset___path',
  CoverArtAssetUrl = 'coverArt___asset___url',
  CoverArtAssetMetadataKey = 'coverArt___asset___metadata____key',
  CoverArtAssetMetadataType = 'coverArt___asset___metadata____type',
  CoverArtAssetMetadataLqip = 'coverArt___asset___metadata___lqip',
  CoverArtAssetMetadataHasAlpha = 'coverArt___asset___metadata___hasAlpha',
  CoverArtAssetMetadataIsOpaque = 'coverArt___asset___metadata___isOpaque',
  CoverArtAssetFixedBase64 = 'coverArt___asset___fixed___base64',
  CoverArtAssetFixedAspectRatio = 'coverArt___asset___fixed___aspectRatio',
  CoverArtAssetFixedWidth = 'coverArt___asset___fixed___width',
  CoverArtAssetFixedHeight = 'coverArt___asset___fixed___height',
  CoverArtAssetFixedSrc = 'coverArt___asset___fixed___src',
  CoverArtAssetFixedSrcSet = 'coverArt___asset___fixed___srcSet',
  CoverArtAssetFixedSrcWebp = 'coverArt___asset___fixed___srcWebp',
  CoverArtAssetFixedSrcSetWebp = 'coverArt___asset___fixed___srcSetWebp',
  CoverArtAssetFluidBase64 = 'coverArt___asset___fluid___base64',
  CoverArtAssetFluidAspectRatio = 'coverArt___asset___fluid___aspectRatio',
  CoverArtAssetFluidSrc = 'coverArt___asset___fluid___src',
  CoverArtAssetFluidSrcSet = 'coverArt___asset___fluid___srcSet',
  CoverArtAssetFluidSrcWebp = 'coverArt___asset___fluid___srcWebp',
  CoverArtAssetFluidSrcSetWebp = 'coverArt___asset___fluid___srcSetWebp',
  CoverArtAssetFluidSizes = 'coverArt___asset___fluid___sizes',
  CoverArtAssetRawMetadata = 'coverArt___asset____rawMetadata',
  CoverArtAssetId = 'coverArt___asset___id',
  CoverArtAssetParentId = 'coverArt___asset___parent___id',
  CoverArtAssetParentChildren = 'coverArt___asset___parent___children',
  CoverArtAssetChildren = 'coverArt___asset___children',
  CoverArtAssetChildrenId = 'coverArt___asset___children___id',
  CoverArtAssetChildrenChildren = 'coverArt___asset___children___children',
  CoverArtAssetInternalContent = 'coverArt___asset___internal___content',
  CoverArtAssetInternalContentDigest = 'coverArt___asset___internal___contentDigest',
  CoverArtAssetInternalDescription = 'coverArt___asset___internal___description',
  CoverArtAssetInternalFieldOwners = 'coverArt___asset___internal___fieldOwners',
  CoverArtAssetInternalIgnoreType = 'coverArt___asset___internal___ignoreType',
  CoverArtAssetInternalMediaType = 'coverArt___asset___internal___mediaType',
  CoverArtAssetInternalOwner = 'coverArt___asset___internal___owner',
  CoverArtAssetInternalType = 'coverArt___asset___internal___type',
  CoverArtAssetChildImageSharpId = 'coverArt___asset___childImageSharp___id',
  CoverArtAssetChildImageSharpChildren = 'coverArt___asset___childImageSharp___children',
  CoverArtHotspotKey = 'coverArt___hotspot____key',
  CoverArtHotspotType = 'coverArt___hotspot____type',
  CoverArtHotspotX = 'coverArt___hotspot___x',
  CoverArtHotspotY = 'coverArt___hotspot___y',
  CoverArtHotspotHeight = 'coverArt___hotspot___height',
  CoverArtHotspotWidth = 'coverArt___hotspot___width',
  CoverArtCropKey = 'coverArt___crop____key',
  CoverArtCropType = 'coverArt___crop____type',
  CoverArtCropTop = 'coverArt___crop___top',
  CoverArtCropBottom = 'coverArt___crop___bottom',
  CoverArtCropLeft = 'coverArt___crop___left',
  CoverArtCropRight = 'coverArt___crop___right',
  Sponsors = 'sponsors',
  SponsorsKey = 'sponsors____key',
  SponsorsType = 'sponsors____type',
  SponsorsSponsorId = 'sponsors___sponsor____id',
  SponsorsSponsorType = 'sponsors___sponsor____type',
  SponsorsSponsorCreatedAt = 'sponsors___sponsor____createdAt',
  SponsorsSponsorUpdatedAt = 'sponsors___sponsor____updatedAt',
  SponsorsSponsorRev = 'sponsors___sponsor____rev',
  SponsorsSponsorKey = 'sponsors___sponsor____key',
  SponsorsSponsorName = 'sponsors___sponsor___name',
  SponsorsSponsorUrl = 'sponsors___sponsor___url',
  SponsorsSponsorLogoKey = 'sponsors___sponsor___logo____key',
  SponsorsSponsorLogoType = 'sponsors___sponsor___logo____type',
  SponsorsSponsorDescription = 'sponsors___sponsor___description',
  SponsorsSponsorDescriptionKey = 'sponsors___sponsor___description____key',
  SponsorsSponsorDescriptionType = 'sponsors___sponsor___description____type',
  SponsorsSponsorDescriptionSanityChildren = 'sponsors___sponsor___description___sanityChildren',
  SponsorsSponsorDescriptionStyle = 'sponsors___sponsor___description___style',
  SponsorsSponsorDescriptionList = 'sponsors___sponsor___description___list',
  SponsorsSponsorRawDescription = 'sponsors___sponsor____rawDescription',
  SponsorsSponsorRawLogo = 'sponsors___sponsor____rawLogo',
  SponsorsSponsorId = 'sponsors___sponsor___id',
  SponsorsSponsorParentId = 'sponsors___sponsor___parent___id',
  SponsorsSponsorParentChildren = 'sponsors___sponsor___parent___children',
  SponsorsSponsorChildren = 'sponsors___sponsor___children',
  SponsorsSponsorChildrenId = 'sponsors___sponsor___children___id',
  SponsorsSponsorChildrenChildren = 'sponsors___sponsor___children___children',
  SponsorsSponsorInternalContent = 'sponsors___sponsor___internal___content',
  SponsorsSponsorInternalContentDigest = 'sponsors___sponsor___internal___contentDigest',
  SponsorsSponsorInternalDescription = 'sponsors___sponsor___internal___description',
  SponsorsSponsorInternalFieldOwners = 'sponsors___sponsor___internal___fieldOwners',
  SponsorsSponsorInternalIgnoreType = 'sponsors___sponsor___internal___ignoreType',
  SponsorsSponsorInternalMediaType = 'sponsors___sponsor___internal___mediaType',
  SponsorsSponsorInternalOwner = 'sponsors___sponsor___internal___owner',
  SponsorsSponsorInternalType = 'sponsors___sponsor___internal___type',
  SponsorsCopy = 'sponsors___copy',
  SponsorsCopyKey = 'sponsors___copy____key',
  SponsorsCopyType = 'sponsors___copy____type',
  SponsorsCopySanityChildren = 'sponsors___copy___sanityChildren',
  SponsorsCopySanityChildrenKey = 'sponsors___copy___sanityChildren____key',
  SponsorsCopySanityChildrenType = 'sponsors___copy___sanityChildren____type',
  SponsorsCopySanityChildrenMarks = 'sponsors___copy___sanityChildren___marks',
  SponsorsCopySanityChildrenText = 'sponsors___copy___sanityChildren___text',
  SponsorsCopyStyle = 'sponsors___copy___style',
  SponsorsCopyList = 'sponsors___copy___list',
  Content = 'content',
  ContentKey = 'content____key',
  ContentType = 'content____type',
  ContentSanityChildren = 'content___sanityChildren',
  ContentSanityChildrenKey = 'content___sanityChildren____key',
  ContentSanityChildrenType = 'content___sanityChildren____type',
  ContentSanityChildrenMarks = 'content___sanityChildren___marks',
  ContentSanityChildrenText = 'content___sanityChildren___text',
  ContentStyle = 'content___style',
  ContentList = 'content___list',
  RawPodcast = '_rawPodcast',
  RawSchedule = '_rawSchedule',
  RawFile = '_rawFile',
  RawContent = '_rawContent',
  RawLinkList = '_rawLinkList',
  RawSlug = '_rawSlug',
  RawItunes = '_rawItunes',
  RawCoverArt = '_rawCoverArt',
  RawSponsors = '_rawSponsors',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityEpisodeFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  podcast?: Maybe<SanityPodcastFilterListInput>,
  schedule?: Maybe<SanityScheduleFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  file?: Maybe<SanityFileFilterInput>,
  fileUrl?: Maybe<StringQueryOperatorInput>,
  duration?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  explicit?: Maybe<BooleanQueryOperatorInput>,
  summary?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  linkList?: Maybe<SanityLinkListItemFilterListInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  itunes?: Maybe<SanityItunesEpisodeSettingsFilterInput>,
  coverArt?: Maybe<SanityImageFilterInput>,
  sponsors?: Maybe<SanitySponsorReadFilterListInput>,
  content?: Maybe<SanityBlockFilterListInput>,
  _rawPodcast?: Maybe<JsonQueryOperatorInput>,
  _rawSchedule?: Maybe<JsonQueryOperatorInput>,
  _rawFile?: Maybe<JsonQueryOperatorInput>,
  _rawContent?: Maybe<JsonQueryOperatorInput>,
  _rawLinkList?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawItunes?: Maybe<JsonQueryOperatorInput>,
  _rawCoverArt?: Maybe<JsonQueryOperatorInput>,
  _rawSponsors?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityEpisodeGroupConnection = {
   __typename?: 'SanityEpisodeGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityEpisodeEdge>,
  nodes: Array<SanityEpisode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityEpisodeSortInput = {
  fields?: Maybe<Array<Maybe<SanityEpisodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityFile = {
   __typename?: 'SanityFile',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityFileAsset>,
};

export type SanityFileAsset = SanityDocument & Node & {
   __typename?: 'SanityFileAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SanityFileAssetConnection = {
   __typename?: 'SanityFileAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityFileAssetGroupConnection>,
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityFileAssetFieldsEnum
};

export type SanityFileAssetEdge = {
   __typename?: 'SanityFileAssetEdge',
  next?: Maybe<SanityFileAsset>,
  node: SanityFileAsset,
  previous?: Maybe<SanityFileAsset>,
};

export enum SanityFileAssetFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  OriginalFilename = 'originalFilename',
  Label = 'label',
  Sha1hash = 'sha1hash',
  Extension = 'extension',
  MimeType = 'mimeType',
  Size = 'size',
  AssetId = 'assetId',
  Path = 'path',
  Url = 'url',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityFileAssetGroupConnection = {
   __typename?: 'SanityFileAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityFileFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityFileAssetFilterInput>,
};

export type SanityGeopoint = {
   __typename?: 'SanityGeopoint',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  alt?: Maybe<Scalars['Float']>,
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  lat?: Maybe<FloatQueryOperatorInput>,
  lng?: Maybe<FloatQueryOperatorInput>,
  alt?: Maybe<FloatQueryOperatorInput>,
};

export type SanityHost = SanityDocument & Node & {
   __typename?: 'SanityHost',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  instagram?: Maybe<Scalars['String']>,
  image?: Maybe<SanityImage>,
  description?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawDescription?: Maybe<Scalars['JSON']>,
  _rawImage?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityHost_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityHost_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityHost_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityHost_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityHostConnection = {
   __typename?: 'SanityHostConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityHostEdge>,
  nodes: Array<SanityHost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityHostGroupConnection>,
};


export type SanityHostConnectionDistinctArgs = {
  field: SanityHostFieldsEnum
};


export type SanityHostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityHostFieldsEnum
};

export type SanityHostEdge = {
   __typename?: 'SanityHostEdge',
  next?: Maybe<SanityHost>,
  node: SanityHost,
  previous?: Maybe<SanityHost>,
};

export enum SanityHostFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Name = 'name',
  Email = 'email',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
  Instagram = 'instagram',
  ImageKey = 'image____key',
  ImageType = 'image____type',
  ImageAssetId = 'image___asset____id',
  ImageAssetType = 'image___asset____type',
  ImageAssetCreatedAt = 'image___asset____createdAt',
  ImageAssetUpdatedAt = 'image___asset____updatedAt',
  ImageAssetRev = 'image___asset____rev',
  ImageAssetKey = 'image___asset____key',
  ImageAssetOriginalFilename = 'image___asset___originalFilename',
  ImageAssetLabel = 'image___asset___label',
  ImageAssetSha1hash = 'image___asset___sha1hash',
  ImageAssetExtension = 'image___asset___extension',
  ImageAssetMimeType = 'image___asset___mimeType',
  ImageAssetSize = 'image___asset___size',
  ImageAssetAssetId = 'image___asset___assetId',
  ImageAssetPath = 'image___asset___path',
  ImageAssetUrl = 'image___asset___url',
  ImageAssetMetadataKey = 'image___asset___metadata____key',
  ImageAssetMetadataType = 'image___asset___metadata____type',
  ImageAssetMetadataLqip = 'image___asset___metadata___lqip',
  ImageAssetMetadataHasAlpha = 'image___asset___metadata___hasAlpha',
  ImageAssetMetadataIsOpaque = 'image___asset___metadata___isOpaque',
  ImageAssetFixedBase64 = 'image___asset___fixed___base64',
  ImageAssetFixedAspectRatio = 'image___asset___fixed___aspectRatio',
  ImageAssetFixedWidth = 'image___asset___fixed___width',
  ImageAssetFixedHeight = 'image___asset___fixed___height',
  ImageAssetFixedSrc = 'image___asset___fixed___src',
  ImageAssetFixedSrcSet = 'image___asset___fixed___srcSet',
  ImageAssetFixedSrcWebp = 'image___asset___fixed___srcWebp',
  ImageAssetFixedSrcSetWebp = 'image___asset___fixed___srcSetWebp',
  ImageAssetFluidBase64 = 'image___asset___fluid___base64',
  ImageAssetFluidAspectRatio = 'image___asset___fluid___aspectRatio',
  ImageAssetFluidSrc = 'image___asset___fluid___src',
  ImageAssetFluidSrcSet = 'image___asset___fluid___srcSet',
  ImageAssetFluidSrcWebp = 'image___asset___fluid___srcWebp',
  ImageAssetFluidSrcSetWebp = 'image___asset___fluid___srcSetWebp',
  ImageAssetFluidSizes = 'image___asset___fluid___sizes',
  ImageAssetRawMetadata = 'image___asset____rawMetadata',
  ImageAssetId = 'image___asset___id',
  ImageAssetParentId = 'image___asset___parent___id',
  ImageAssetParentChildren = 'image___asset___parent___children',
  ImageAssetChildren = 'image___asset___children',
  ImageAssetChildrenId = 'image___asset___children___id',
  ImageAssetChildrenChildren = 'image___asset___children___children',
  ImageAssetInternalContent = 'image___asset___internal___content',
  ImageAssetInternalContentDigest = 'image___asset___internal___contentDigest',
  ImageAssetInternalDescription = 'image___asset___internal___description',
  ImageAssetInternalFieldOwners = 'image___asset___internal___fieldOwners',
  ImageAssetInternalIgnoreType = 'image___asset___internal___ignoreType',
  ImageAssetInternalMediaType = 'image___asset___internal___mediaType',
  ImageAssetInternalOwner = 'image___asset___internal___owner',
  ImageAssetInternalType = 'image___asset___internal___type',
  ImageAssetChildImageSharpId = 'image___asset___childImageSharp___id',
  ImageAssetChildImageSharpChildren = 'image___asset___childImageSharp___children',
  ImageHotspotKey = 'image___hotspot____key',
  ImageHotspotType = 'image___hotspot____type',
  ImageHotspotX = 'image___hotspot___x',
  ImageHotspotY = 'image___hotspot___y',
  ImageHotspotHeight = 'image___hotspot___height',
  ImageHotspotWidth = 'image___hotspot___width',
  ImageCropKey = 'image___crop____key',
  ImageCropType = 'image___crop____type',
  ImageCropTop = 'image___crop___top',
  ImageCropBottom = 'image___crop___bottom',
  ImageCropLeft = 'image___crop___left',
  ImageCropRight = 'image___crop___right',
  Description = 'description',
  DescriptionKey = 'description____key',
  DescriptionType = 'description____type',
  DescriptionSanityChildren = 'description___sanityChildren',
  DescriptionSanityChildrenKey = 'description___sanityChildren____key',
  DescriptionSanityChildrenType = 'description___sanityChildren____type',
  DescriptionSanityChildrenMarks = 'description___sanityChildren___marks',
  DescriptionSanityChildrenText = 'description___sanityChildren___text',
  DescriptionStyle = 'description___style',
  DescriptionList = 'description___list',
  RawDescription = '_rawDescription',
  RawImage = '_rawImage',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityHostFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  instagram?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<SanityImageFilterInput>,
  description?: Maybe<SanityBlockFilterListInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawImage?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityHostGroupConnection = {
   __typename?: 'SanityHostGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityHostEdge>,
  nodes: Array<SanityHost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityHostSortInput = {
  fields?: Maybe<Array<Maybe<SanityHostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityImage = {
   __typename?: 'SanityImage',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityImageAsset = SanityDocument & Node & {
   __typename?: 'SanityImageAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  metadata?: Maybe<SanityImageMetadata>,
  fixed?: Maybe<SanityImageFixed>,
  fluid?: Maybe<SanityImageFluid>,
  _rawMetadata?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  sizes?: Maybe<Scalars['String']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityImageAssetConnection = {
   __typename?: 'SanityImageAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityImageAssetGroupConnection>,
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityImageAssetFieldsEnum
};

export type SanityImageAssetEdge = {
   __typename?: 'SanityImageAssetEdge',
  next?: Maybe<SanityImageAsset>,
  node: SanityImageAsset,
  previous?: Maybe<SanityImageAsset>,
};

export enum SanityImageAssetFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  OriginalFilename = 'originalFilename',
  Label = 'label',
  Sha1hash = 'sha1hash',
  Extension = 'extension',
  MimeType = 'mimeType',
  Size = 'size',
  AssetId = 'assetId',
  Path = 'path',
  Url = 'url',
  MetadataKey = 'metadata____key',
  MetadataType = 'metadata____type',
  MetadataLocationKey = 'metadata___location____key',
  MetadataLocationType = 'metadata___location____type',
  MetadataLocationLat = 'metadata___location___lat',
  MetadataLocationLng = 'metadata___location___lng',
  MetadataLocationAlt = 'metadata___location___alt',
  MetadataDimensionsKey = 'metadata___dimensions____key',
  MetadataDimensionsType = 'metadata___dimensions____type',
  MetadataDimensionsHeight = 'metadata___dimensions___height',
  MetadataDimensionsWidth = 'metadata___dimensions___width',
  MetadataDimensionsAspectRatio = 'metadata___dimensions___aspectRatio',
  MetadataPaletteKey = 'metadata___palette____key',
  MetadataPaletteType = 'metadata___palette____type',
  MetadataPaletteDarkMutedKey = 'metadata___palette___darkMuted____key',
  MetadataPaletteDarkMutedType = 'metadata___palette___darkMuted____type',
  MetadataPaletteDarkMutedBackground = 'metadata___palette___darkMuted___background',
  MetadataPaletteDarkMutedForeground = 'metadata___palette___darkMuted___foreground',
  MetadataPaletteDarkMutedPopulation = 'metadata___palette___darkMuted___population',
  MetadataPaletteDarkMutedTitle = 'metadata___palette___darkMuted___title',
  MetadataPaletteLightVibrantKey = 'metadata___palette___lightVibrant____key',
  MetadataPaletteLightVibrantType = 'metadata___palette___lightVibrant____type',
  MetadataPaletteLightVibrantBackground = 'metadata___palette___lightVibrant___background',
  MetadataPaletteLightVibrantForeground = 'metadata___palette___lightVibrant___foreground',
  MetadataPaletteLightVibrantPopulation = 'metadata___palette___lightVibrant___population',
  MetadataPaletteLightVibrantTitle = 'metadata___palette___lightVibrant___title',
  MetadataPaletteDarkVibrantKey = 'metadata___palette___darkVibrant____key',
  MetadataPaletteDarkVibrantType = 'metadata___palette___darkVibrant____type',
  MetadataPaletteDarkVibrantBackground = 'metadata___palette___darkVibrant___background',
  MetadataPaletteDarkVibrantForeground = 'metadata___palette___darkVibrant___foreground',
  MetadataPaletteDarkVibrantPopulation = 'metadata___palette___darkVibrant___population',
  MetadataPaletteDarkVibrantTitle = 'metadata___palette___darkVibrant___title',
  MetadataPaletteVibrantKey = 'metadata___palette___vibrant____key',
  MetadataPaletteVibrantType = 'metadata___palette___vibrant____type',
  MetadataPaletteVibrantBackground = 'metadata___palette___vibrant___background',
  MetadataPaletteVibrantForeground = 'metadata___palette___vibrant___foreground',
  MetadataPaletteVibrantPopulation = 'metadata___palette___vibrant___population',
  MetadataPaletteVibrantTitle = 'metadata___palette___vibrant___title',
  MetadataPaletteDominantKey = 'metadata___palette___dominant____key',
  MetadataPaletteDominantType = 'metadata___palette___dominant____type',
  MetadataPaletteDominantBackground = 'metadata___palette___dominant___background',
  MetadataPaletteDominantForeground = 'metadata___palette___dominant___foreground',
  MetadataPaletteDominantPopulation = 'metadata___palette___dominant___population',
  MetadataPaletteDominantTitle = 'metadata___palette___dominant___title',
  MetadataPaletteLightMutedKey = 'metadata___palette___lightMuted____key',
  MetadataPaletteLightMutedType = 'metadata___palette___lightMuted____type',
  MetadataPaletteLightMutedBackground = 'metadata___palette___lightMuted___background',
  MetadataPaletteLightMutedForeground = 'metadata___palette___lightMuted___foreground',
  MetadataPaletteLightMutedPopulation = 'metadata___palette___lightMuted___population',
  MetadataPaletteLightMutedTitle = 'metadata___palette___lightMuted___title',
  MetadataPaletteMutedKey = 'metadata___palette___muted____key',
  MetadataPaletteMutedType = 'metadata___palette___muted____type',
  MetadataPaletteMutedBackground = 'metadata___palette___muted___background',
  MetadataPaletteMutedForeground = 'metadata___palette___muted___foreground',
  MetadataPaletteMutedPopulation = 'metadata___palette___muted___population',
  MetadataPaletteMutedTitle = 'metadata___palette___muted___title',
  MetadataLqip = 'metadata___lqip',
  MetadataHasAlpha = 'metadata___hasAlpha',
  MetadataIsOpaque = 'metadata___isOpaque',
  FixedBase64 = 'fixed___base64',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  RawMetadata = '_rawMetadata',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type'
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
};

export type SanityImageAssetGroupConnection = {
   __typename?: 'SanityImageAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityImageCrop = {
   __typename?: 'SanityImageCrop',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['Float']>,
  bottom?: Maybe<Scalars['Float']>,
  left?: Maybe<Scalars['Float']>,
  right?: Maybe<Scalars['Float']>,
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<FloatQueryOperatorInput>,
  bottom?: Maybe<FloatQueryOperatorInput>,
  left?: Maybe<FloatQueryOperatorInput>,
  right?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageDimensions = {
   __typename?: 'SanityImageDimensions',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityImageAssetFilterInput>,
  hotspot?: Maybe<SanityImageHotspotFilterInput>,
  crop?: Maybe<SanityImageCropFilterInput>,
};

export type SanityImageFixed = {
   __typename?: 'SanityImageFixed',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type SanityImageFluid = {
   __typename?: 'SanityImageFluid',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export enum SanityImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type SanityImageHotspot = {
   __typename?: 'SanityImageHotspot',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  x?: Maybe<Scalars['Float']>,
  y?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  x?: Maybe<FloatQueryOperatorInput>,
  y?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageMetadata = {
   __typename?: 'SanityImageMetadata',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  location?: Maybe<SanityGeopoint>,
  dimensions?: Maybe<SanityImageDimensions>,
  palette?: Maybe<SanityImagePalette>,
  lqip?: Maybe<Scalars['String']>,
  hasAlpha?: Maybe<Scalars['Boolean']>,
  isOpaque?: Maybe<Scalars['Boolean']>,
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<SanityGeopointFilterInput>,
  dimensions?: Maybe<SanityImageDimensionsFilterInput>,
  palette?: Maybe<SanityImagePaletteFilterInput>,
  lqip?: Maybe<StringQueryOperatorInput>,
  hasAlpha?: Maybe<BooleanQueryOperatorInput>,
  isOpaque?: Maybe<BooleanQueryOperatorInput>,
};

export type SanityImagePalette = {
   __typename?: 'SanityImagePalette',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  darkMuted?: Maybe<SanityImagePaletteSwatch>,
  lightVibrant?: Maybe<SanityImagePaletteSwatch>,
  darkVibrant?: Maybe<SanityImagePaletteSwatch>,
  vibrant?: Maybe<SanityImagePaletteSwatch>,
  dominant?: Maybe<SanityImagePaletteSwatch>,
  lightMuted?: Maybe<SanityImagePaletteSwatch>,
  muted?: Maybe<SanityImagePaletteSwatch>,
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>,
};

export type SanityImagePaletteSwatch = {
   __typename?: 'SanityImagePaletteSwatch',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  foreground?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  background?: Maybe<StringQueryOperatorInput>,
  foreground?: Maybe<StringQueryOperatorInput>,
  population?: Maybe<FloatQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SanityItunes = {
   __typename?: 'SanityItunes',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  owner?: Maybe<SanityOwner>,
  url?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  categories?: Maybe<SanityCategories>,
};

export type SanityItunesEpisodeSettings = {
   __typename?: 'SanityItunesEpisodeSettings',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  season?: Maybe<Scalars['Float']>,
};

export type SanityItunesEpisodeSettingsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  season?: Maybe<FloatQueryOperatorInput>,
};

export type SanityItunesFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<SanityOwnerFilterInput>,
  url?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  categories?: Maybe<SanityCategoriesFilterInput>,
};

export type SanityLinkListItem = {
   __typename?: 'SanityLinkListItem',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  URL?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
};

export type SanityLinkListItemFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  URL?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  timestamp?: Maybe<StringQueryOperatorInput>,
};

export type SanityLinkListItemFilterListInput = {
  elemMatch?: Maybe<SanityLinkListItemFilterInput>,
};

export type SanityOwner = {
   __typename?: 'SanityOwner',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type SanityOwnerFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
};

export type SanityPodcast = SanityDocument & Node & {
   __typename?: 'SanityPodcast',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  description?: Maybe<Scalars['String']>,
  coverArt?: Maybe<SanityImage>,
  copyright?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  explicit?: Maybe<Scalars['Boolean']>,
  itunes?: Maybe<SanityItunes>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawCoverArt?: Maybe<Scalars['JSON']>,
  _rawItunes?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityPodcast_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPodcast_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPodcast_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPodcast_RawCoverArtArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPodcast_RawItunesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityPodcastConnection = {
   __typename?: 'SanityPodcastConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPodcastEdge>,
  nodes: Array<SanityPodcast>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityPodcastGroupConnection>,
};


export type SanityPodcastConnectionDistinctArgs = {
  field: SanityPodcastFieldsEnum
};


export type SanityPodcastConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityPodcastFieldsEnum
};

export type SanityPodcastEdge = {
   __typename?: 'SanityPodcastEdge',
  next?: Maybe<SanityPodcast>,
  node: SanityPodcast,
  previous?: Maybe<SanityPodcast>,
};

export enum SanityPodcastFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Title = 'title',
  Subtitle = 'subtitle',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  Description = 'description',
  CoverArtKey = 'coverArt____key',
  CoverArtType = 'coverArt____type',
  CoverArtAssetId = 'coverArt___asset____id',
  CoverArtAssetType = 'coverArt___asset____type',
  CoverArtAssetCreatedAt = 'coverArt___asset____createdAt',
  CoverArtAssetUpdatedAt = 'coverArt___asset____updatedAt',
  CoverArtAssetRev = 'coverArt___asset____rev',
  CoverArtAssetKey = 'coverArt___asset____key',
  CoverArtAssetOriginalFilename = 'coverArt___asset___originalFilename',
  CoverArtAssetLabel = 'coverArt___asset___label',
  CoverArtAssetSha1hash = 'coverArt___asset___sha1hash',
  CoverArtAssetExtension = 'coverArt___asset___extension',
  CoverArtAssetMimeType = 'coverArt___asset___mimeType',
  CoverArtAssetSize = 'coverArt___asset___size',
  CoverArtAssetAssetId = 'coverArt___asset___assetId',
  CoverArtAssetPath = 'coverArt___asset___path',
  CoverArtAssetUrl = 'coverArt___asset___url',
  CoverArtAssetMetadataKey = 'coverArt___asset___metadata____key',
  CoverArtAssetMetadataType = 'coverArt___asset___metadata____type',
  CoverArtAssetMetadataLqip = 'coverArt___asset___metadata___lqip',
  CoverArtAssetMetadataHasAlpha = 'coverArt___asset___metadata___hasAlpha',
  CoverArtAssetMetadataIsOpaque = 'coverArt___asset___metadata___isOpaque',
  CoverArtAssetFixedBase64 = 'coverArt___asset___fixed___base64',
  CoverArtAssetFixedAspectRatio = 'coverArt___asset___fixed___aspectRatio',
  CoverArtAssetFixedWidth = 'coverArt___asset___fixed___width',
  CoverArtAssetFixedHeight = 'coverArt___asset___fixed___height',
  CoverArtAssetFixedSrc = 'coverArt___asset___fixed___src',
  CoverArtAssetFixedSrcSet = 'coverArt___asset___fixed___srcSet',
  CoverArtAssetFixedSrcWebp = 'coverArt___asset___fixed___srcWebp',
  CoverArtAssetFixedSrcSetWebp = 'coverArt___asset___fixed___srcSetWebp',
  CoverArtAssetFluidBase64 = 'coverArt___asset___fluid___base64',
  CoverArtAssetFluidAspectRatio = 'coverArt___asset___fluid___aspectRatio',
  CoverArtAssetFluidSrc = 'coverArt___asset___fluid___src',
  CoverArtAssetFluidSrcSet = 'coverArt___asset___fluid___srcSet',
  CoverArtAssetFluidSrcWebp = 'coverArt___asset___fluid___srcWebp',
  CoverArtAssetFluidSrcSetWebp = 'coverArt___asset___fluid___srcSetWebp',
  CoverArtAssetFluidSizes = 'coverArt___asset___fluid___sizes',
  CoverArtAssetRawMetadata = 'coverArt___asset____rawMetadata',
  CoverArtAssetId = 'coverArt___asset___id',
  CoverArtAssetParentId = 'coverArt___asset___parent___id',
  CoverArtAssetParentChildren = 'coverArt___asset___parent___children',
  CoverArtAssetChildren = 'coverArt___asset___children',
  CoverArtAssetChildrenId = 'coverArt___asset___children___id',
  CoverArtAssetChildrenChildren = 'coverArt___asset___children___children',
  CoverArtAssetInternalContent = 'coverArt___asset___internal___content',
  CoverArtAssetInternalContentDigest = 'coverArt___asset___internal___contentDigest',
  CoverArtAssetInternalDescription = 'coverArt___asset___internal___description',
  CoverArtAssetInternalFieldOwners = 'coverArt___asset___internal___fieldOwners',
  CoverArtAssetInternalIgnoreType = 'coverArt___asset___internal___ignoreType',
  CoverArtAssetInternalMediaType = 'coverArt___asset___internal___mediaType',
  CoverArtAssetInternalOwner = 'coverArt___asset___internal___owner',
  CoverArtAssetInternalType = 'coverArt___asset___internal___type',
  CoverArtAssetChildImageSharpId = 'coverArt___asset___childImageSharp___id',
  CoverArtAssetChildImageSharpChildren = 'coverArt___asset___childImageSharp___children',
  CoverArtHotspotKey = 'coverArt___hotspot____key',
  CoverArtHotspotType = 'coverArt___hotspot____type',
  CoverArtHotspotX = 'coverArt___hotspot___x',
  CoverArtHotspotY = 'coverArt___hotspot___y',
  CoverArtHotspotHeight = 'coverArt___hotspot___height',
  CoverArtHotspotWidth = 'coverArt___hotspot___width',
  CoverArtCropKey = 'coverArt___crop____key',
  CoverArtCropType = 'coverArt___crop____type',
  CoverArtCropTop = 'coverArt___crop___top',
  CoverArtCropBottom = 'coverArt___crop___bottom',
  CoverArtCropLeft = 'coverArt___crop___left',
  CoverArtCropRight = 'coverArt___crop___right',
  Copyright = 'copyright',
  Language = 'language',
  Explicit = 'explicit',
  ItunesKey = 'itunes____key',
  ItunesType = 'itunes____type',
  ItunesAuthor = 'itunes___author',
  ItunesOwnerKey = 'itunes___owner____key',
  ItunesOwnerType = 'itunes___owner____type',
  ItunesOwnerEmail = 'itunes___owner___email',
  ItunesOwnerName = 'itunes___owner___name',
  ItunesUrl = 'itunes___url',
  ItunesType = 'itunes___type',
  ItunesCategoriesKey = 'itunes___categories____key',
  ItunesCategoriesType = 'itunes___categories____type',
  ItunesCategoriesFirstCategory = 'itunes___categories___firstCategory',
  ItunesCategoriesSecondaryCategory = 'itunes___categories___secondaryCategory',
  ItunesCategoriesTertiaryCategory = 'itunes___categories___tertiaryCategory',
  RawSlug = '_rawSlug',
  RawCoverArt = '_rawCoverArt',
  RawItunes = '_rawItunes',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityPodcastFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  coverArt?: Maybe<SanityImageFilterInput>,
  copyright?: Maybe<StringQueryOperatorInput>,
  language?: Maybe<StringQueryOperatorInput>,
  explicit?: Maybe<BooleanQueryOperatorInput>,
  itunes?: Maybe<SanityItunesFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawCoverArt?: Maybe<JsonQueryOperatorInput>,
  _rawItunes?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityPodcastFilterListInput = {
  elemMatch?: Maybe<SanityPodcastFilterInput>,
};

export type SanityPodcastGroupConnection = {
   __typename?: 'SanityPodcastGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPodcastEdge>,
  nodes: Array<SanityPodcast>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityPodcastSortInput = {
  fields?: Maybe<Array<Maybe<SanityPodcastFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityPost = SanityDocument & Node & {
   __typename?: 'SanityPost',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  author?: Maybe<SanityAuthor>,
  mainImage?: Maybe<SanityImage>,
  categories?: Maybe<Array<Maybe<SanityCategory>>>,
  publishedAt?: Maybe<Scalars['Date']>,
  body?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawAuthor?: Maybe<Scalars['JSON']>,
  _rawMainImage?: Maybe<Scalars['JSON']>,
  _rawCategories?: Maybe<Scalars['JSON']>,
  _rawBody?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityPost_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPostPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPost_RawAuthorArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPost_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityPostConnection = {
   __typename?: 'SanityPostConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPostEdge>,
  nodes: Array<SanityPost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityPostGroupConnection>,
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum
};


export type SanityPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityPostFieldsEnum
};

export type SanityPostEdge = {
   __typename?: 'SanityPostEdge',
  next?: Maybe<SanityPost>,
  node: SanityPost,
  previous?: Maybe<SanityPost>,
};

export enum SanityPostFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Title = 'title',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  AuthorId = 'author____id',
  AuthorType = 'author____type',
  AuthorCreatedAt = 'author____createdAt',
  AuthorUpdatedAt = 'author____updatedAt',
  AuthorRev = 'author____rev',
  AuthorKey = 'author____key',
  AuthorName = 'author___name',
  AuthorSlugKey = 'author___slug____key',
  AuthorSlugType = 'author___slug____type',
  AuthorSlugCurrent = 'author___slug___current',
  AuthorLinkedin = 'author___linkedin',
  AuthorTwitter = 'author___twitter',
  AuthorInstagram = 'author___instagram',
  AuthorImageKey = 'author___image____key',
  AuthorImageType = 'author___image____type',
  AuthorImageAssetId = 'author___image___asset____id',
  AuthorImageAssetType = 'author___image___asset____type',
  AuthorImageAssetCreatedAt = 'author___image___asset____createdAt',
  AuthorImageAssetUpdatedAt = 'author___image___asset____updatedAt',
  AuthorImageAssetRev = 'author___image___asset____rev',
  AuthorImageAssetKey = 'author___image___asset____key',
  AuthorImageAssetOriginalFilename = 'author___image___asset___originalFilename',
  AuthorImageAssetLabel = 'author___image___asset___label',
  AuthorImageAssetSha1hash = 'author___image___asset___sha1hash',
  AuthorImageAssetExtension = 'author___image___asset___extension',
  AuthorImageAssetMimeType = 'author___image___asset___mimeType',
  AuthorImageAssetSize = 'author___image___asset___size',
  AuthorImageAssetAssetId = 'author___image___asset___assetId',
  AuthorImageAssetPath = 'author___image___asset___path',
  AuthorImageAssetUrl = 'author___image___asset___url',
  AuthorImageAssetRawMetadata = 'author___image___asset____rawMetadata',
  AuthorImageAssetId = 'author___image___asset___id',
  AuthorImageAssetChildren = 'author___image___asset___children',
  AuthorImageHotspotKey = 'author___image___hotspot____key',
  AuthorImageHotspotType = 'author___image___hotspot____type',
  AuthorImageHotspotX = 'author___image___hotspot___x',
  AuthorImageHotspotY = 'author___image___hotspot___y',
  AuthorImageHotspotHeight = 'author___image___hotspot___height',
  AuthorImageHotspotWidth = 'author___image___hotspot___width',
  AuthorImageCropKey = 'author___image___crop____key',
  AuthorImageCropType = 'author___image___crop____type',
  AuthorImageCropTop = 'author___image___crop___top',
  AuthorImageCropBottom = 'author___image___crop___bottom',
  AuthorImageCropLeft = 'author___image___crop___left',
  AuthorImageCropRight = 'author___image___crop___right',
  AuthorBio = 'author___bio',
  AuthorBioKey = 'author___bio____key',
  AuthorBioType = 'author___bio____type',
  AuthorBioSanityChildren = 'author___bio___sanityChildren',
  AuthorBioSanityChildrenKey = 'author___bio___sanityChildren____key',
  AuthorBioSanityChildrenType = 'author___bio___sanityChildren____type',
  AuthorBioSanityChildrenMarks = 'author___bio___sanityChildren___marks',
  AuthorBioSanityChildrenText = 'author___bio___sanityChildren___text',
  AuthorBioStyle = 'author___bio___style',
  AuthorBioList = 'author___bio___list',
  AuthorRawSlug = 'author____rawSlug',
  AuthorRawImage = 'author____rawImage',
  AuthorRawBio = 'author____rawBio',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  MainImageKey = 'mainImage____key',
  MainImageType = 'mainImage____type',
  MainImageAssetId = 'mainImage___asset____id',
  MainImageAssetType = 'mainImage___asset____type',
  MainImageAssetCreatedAt = 'mainImage___asset____createdAt',
  MainImageAssetUpdatedAt = 'mainImage___asset____updatedAt',
  MainImageAssetRev = 'mainImage___asset____rev',
  MainImageAssetKey = 'mainImage___asset____key',
  MainImageAssetOriginalFilename = 'mainImage___asset___originalFilename',
  MainImageAssetLabel = 'mainImage___asset___label',
  MainImageAssetSha1hash = 'mainImage___asset___sha1hash',
  MainImageAssetExtension = 'mainImage___asset___extension',
  MainImageAssetMimeType = 'mainImage___asset___mimeType',
  MainImageAssetSize = 'mainImage___asset___size',
  MainImageAssetAssetId = 'mainImage___asset___assetId',
  MainImageAssetPath = 'mainImage___asset___path',
  MainImageAssetUrl = 'mainImage___asset___url',
  MainImageAssetMetadataKey = 'mainImage___asset___metadata____key',
  MainImageAssetMetadataType = 'mainImage___asset___metadata____type',
  MainImageAssetMetadataLqip = 'mainImage___asset___metadata___lqip',
  MainImageAssetMetadataHasAlpha = 'mainImage___asset___metadata___hasAlpha',
  MainImageAssetMetadataIsOpaque = 'mainImage___asset___metadata___isOpaque',
  MainImageAssetFixedBase64 = 'mainImage___asset___fixed___base64',
  MainImageAssetFixedAspectRatio = 'mainImage___asset___fixed___aspectRatio',
  MainImageAssetFixedWidth = 'mainImage___asset___fixed___width',
  MainImageAssetFixedHeight = 'mainImage___asset___fixed___height',
  MainImageAssetFixedSrc = 'mainImage___asset___fixed___src',
  MainImageAssetFixedSrcSet = 'mainImage___asset___fixed___srcSet',
  MainImageAssetFixedSrcWebp = 'mainImage___asset___fixed___srcWebp',
  MainImageAssetFixedSrcSetWebp = 'mainImage___asset___fixed___srcSetWebp',
  MainImageAssetFluidBase64 = 'mainImage___asset___fluid___base64',
  MainImageAssetFluidAspectRatio = 'mainImage___asset___fluid___aspectRatio',
  MainImageAssetFluidSrc = 'mainImage___asset___fluid___src',
  MainImageAssetFluidSrcSet = 'mainImage___asset___fluid___srcSet',
  MainImageAssetFluidSrcWebp = 'mainImage___asset___fluid___srcWebp',
  MainImageAssetFluidSrcSetWebp = 'mainImage___asset___fluid___srcSetWebp',
  MainImageAssetFluidSizes = 'mainImage___asset___fluid___sizes',
  MainImageAssetRawMetadata = 'mainImage___asset____rawMetadata',
  MainImageAssetId = 'mainImage___asset___id',
  MainImageAssetParentId = 'mainImage___asset___parent___id',
  MainImageAssetParentChildren = 'mainImage___asset___parent___children',
  MainImageAssetChildren = 'mainImage___asset___children',
  MainImageAssetChildrenId = 'mainImage___asset___children___id',
  MainImageAssetChildrenChildren = 'mainImage___asset___children___children',
  MainImageAssetInternalContent = 'mainImage___asset___internal___content',
  MainImageAssetInternalContentDigest = 'mainImage___asset___internal___contentDigest',
  MainImageAssetInternalDescription = 'mainImage___asset___internal___description',
  MainImageAssetInternalFieldOwners = 'mainImage___asset___internal___fieldOwners',
  MainImageAssetInternalIgnoreType = 'mainImage___asset___internal___ignoreType',
  MainImageAssetInternalMediaType = 'mainImage___asset___internal___mediaType',
  MainImageAssetInternalOwner = 'mainImage___asset___internal___owner',
  MainImageAssetInternalType = 'mainImage___asset___internal___type',
  MainImageAssetChildImageSharpId = 'mainImage___asset___childImageSharp___id',
  MainImageAssetChildImageSharpChildren = 'mainImage___asset___childImageSharp___children',
  MainImageHotspotKey = 'mainImage___hotspot____key',
  MainImageHotspotType = 'mainImage___hotspot____type',
  MainImageHotspotX = 'mainImage___hotspot___x',
  MainImageHotspotY = 'mainImage___hotspot___y',
  MainImageHotspotHeight = 'mainImage___hotspot___height',
  MainImageHotspotWidth = 'mainImage___hotspot___width',
  MainImageCropKey = 'mainImage___crop____key',
  MainImageCropType = 'mainImage___crop____type',
  MainImageCropTop = 'mainImage___crop___top',
  MainImageCropBottom = 'mainImage___crop___bottom',
  MainImageCropLeft = 'mainImage___crop___left',
  MainImageCropRight = 'mainImage___crop___right',
  Categories = 'categories',
  CategoriesId = 'categories____id',
  CategoriesType = 'categories____type',
  CategoriesCreatedAt = 'categories____createdAt',
  CategoriesUpdatedAt = 'categories____updatedAt',
  CategoriesRev = 'categories____rev',
  CategoriesKey = 'categories____key',
  CategoriesTitle = 'categories___title',
  CategoriesDescription = 'categories___description',
  CategoriesId = 'categories___id',
  CategoriesParentId = 'categories___parent___id',
  CategoriesParentParentId = 'categories___parent___parent___id',
  CategoriesParentParentChildren = 'categories___parent___parent___children',
  CategoriesParentChildren = 'categories___parent___children',
  CategoriesParentChildrenId = 'categories___parent___children___id',
  CategoriesParentChildrenChildren = 'categories___parent___children___children',
  CategoriesParentInternalContent = 'categories___parent___internal___content',
  CategoriesParentInternalContentDigest = 'categories___parent___internal___contentDigest',
  CategoriesParentInternalDescription = 'categories___parent___internal___description',
  CategoriesParentInternalFieldOwners = 'categories___parent___internal___fieldOwners',
  CategoriesParentInternalIgnoreType = 'categories___parent___internal___ignoreType',
  CategoriesParentInternalMediaType = 'categories___parent___internal___mediaType',
  CategoriesParentInternalOwner = 'categories___parent___internal___owner',
  CategoriesParentInternalType = 'categories___parent___internal___type',
  CategoriesChildren = 'categories___children',
  CategoriesChildrenId = 'categories___children___id',
  CategoriesChildrenParentId = 'categories___children___parent___id',
  CategoriesChildrenParentChildren = 'categories___children___parent___children',
  CategoriesChildrenChildren = 'categories___children___children',
  CategoriesChildrenChildrenId = 'categories___children___children___id',
  CategoriesChildrenChildrenChildren = 'categories___children___children___children',
  CategoriesChildrenInternalContent = 'categories___children___internal___content',
  CategoriesChildrenInternalContentDigest = 'categories___children___internal___contentDigest',
  CategoriesChildrenInternalDescription = 'categories___children___internal___description',
  CategoriesChildrenInternalFieldOwners = 'categories___children___internal___fieldOwners',
  CategoriesChildrenInternalIgnoreType = 'categories___children___internal___ignoreType',
  CategoriesChildrenInternalMediaType = 'categories___children___internal___mediaType',
  CategoriesChildrenInternalOwner = 'categories___children___internal___owner',
  CategoriesChildrenInternalType = 'categories___children___internal___type',
  CategoriesInternalContent = 'categories___internal___content',
  CategoriesInternalContentDigest = 'categories___internal___contentDigest',
  CategoriesInternalDescription = 'categories___internal___description',
  CategoriesInternalFieldOwners = 'categories___internal___fieldOwners',
  CategoriesInternalIgnoreType = 'categories___internal___ignoreType',
  CategoriesInternalMediaType = 'categories___internal___mediaType',
  CategoriesInternalOwner = 'categories___internal___owner',
  CategoriesInternalType = 'categories___internal___type',
  PublishedAt = 'publishedAt',
  Body = 'body',
  BodyKey = 'body____key',
  BodyType = 'body____type',
  BodySanityChildren = 'body___sanityChildren',
  BodySanityChildrenKey = 'body___sanityChildren____key',
  BodySanityChildrenType = 'body___sanityChildren____type',
  BodySanityChildrenMarks = 'body___sanityChildren___marks',
  BodySanityChildrenText = 'body___sanityChildren___text',
  BodyStyle = 'body___style',
  BodyList = 'body___list',
  RawSlug = '_rawSlug',
  RawAuthor = '_rawAuthor',
  RawMainImage = '_rawMainImage',
  RawCategories = '_rawCategories',
  RawBody = '_rawBody',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityPostFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  author?: Maybe<SanityAuthorFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  categories?: Maybe<SanityCategoryFilterListInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawAuthor?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawCategories?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityPostGroupConnection = {
   __typename?: 'SanityPostGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityPostEdge>,
  nodes: Array<SanityPost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityPostSortInput = {
  fields?: Maybe<Array<Maybe<SanityPostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'],
};

export type SanitySchedule = {
   __typename?: 'SanitySchedule',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  publish?: Maybe<Scalars['Date']>,
  unpublish?: Maybe<Scalars['Date']>,
};


export type SanitySchedulePublishArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityScheduleUnpublishArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SanityScheduleFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  publish?: Maybe<DateQueryOperatorInput>,
  unpublish?: Maybe<DateQueryOperatorInput>,
};

export type SanitySlug = {
   __typename?: 'SanitySlug',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  current?: Maybe<StringQueryOperatorInput>,
};

export type SanitySocial = {
   __typename?: 'SanitySocial',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  facebook?: Maybe<Scalars['String']>,
  googleplus?: Maybe<Scalars['String']>,
  instagram?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  youtube?: Maybe<Scalars['String']>,
};

export type SanitySpan = {
   __typename?: 'SanitySpan',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<Scalars['String']>>>,
  text?: Maybe<Scalars['String']>,
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  marks?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>,
};

export type SanitySponsor = SanityDocument & Node & {
   __typename?: 'SanitySponsor',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  logo?: Maybe<SanityImage>,
  description?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawDescription?: Maybe<Scalars['JSON']>,
  _rawLogo?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanitySponsor_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySponsor_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySponsor_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySponsor_RawLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanitySponsorConnection = {
   __typename?: 'SanitySponsorConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySponsorEdge>,
  nodes: Array<SanitySponsor>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanitySponsorGroupConnection>,
};


export type SanitySponsorConnectionDistinctArgs = {
  field: SanitySponsorFieldsEnum
};


export type SanitySponsorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanitySponsorFieldsEnum
};

export type SanitySponsorEdge = {
   __typename?: 'SanitySponsorEdge',
  next?: Maybe<SanitySponsor>,
  node: SanitySponsor,
  previous?: Maybe<SanitySponsor>,
};

export enum SanitySponsorFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Name = 'name',
  Url = 'url',
  LogoKey = 'logo____key',
  LogoType = 'logo____type',
  LogoAssetId = 'logo___asset____id',
  LogoAssetType = 'logo___asset____type',
  LogoAssetCreatedAt = 'logo___asset____createdAt',
  LogoAssetUpdatedAt = 'logo___asset____updatedAt',
  LogoAssetRev = 'logo___asset____rev',
  LogoAssetKey = 'logo___asset____key',
  LogoAssetOriginalFilename = 'logo___asset___originalFilename',
  LogoAssetLabel = 'logo___asset___label',
  LogoAssetSha1hash = 'logo___asset___sha1hash',
  LogoAssetExtension = 'logo___asset___extension',
  LogoAssetMimeType = 'logo___asset___mimeType',
  LogoAssetSize = 'logo___asset___size',
  LogoAssetAssetId = 'logo___asset___assetId',
  LogoAssetPath = 'logo___asset___path',
  LogoAssetUrl = 'logo___asset___url',
  LogoAssetMetadataKey = 'logo___asset___metadata____key',
  LogoAssetMetadataType = 'logo___asset___metadata____type',
  LogoAssetMetadataLqip = 'logo___asset___metadata___lqip',
  LogoAssetMetadataHasAlpha = 'logo___asset___metadata___hasAlpha',
  LogoAssetMetadataIsOpaque = 'logo___asset___metadata___isOpaque',
  LogoAssetFixedBase64 = 'logo___asset___fixed___base64',
  LogoAssetFixedAspectRatio = 'logo___asset___fixed___aspectRatio',
  LogoAssetFixedWidth = 'logo___asset___fixed___width',
  LogoAssetFixedHeight = 'logo___asset___fixed___height',
  LogoAssetFixedSrc = 'logo___asset___fixed___src',
  LogoAssetFixedSrcSet = 'logo___asset___fixed___srcSet',
  LogoAssetFixedSrcWebp = 'logo___asset___fixed___srcWebp',
  LogoAssetFixedSrcSetWebp = 'logo___asset___fixed___srcSetWebp',
  LogoAssetFluidBase64 = 'logo___asset___fluid___base64',
  LogoAssetFluidAspectRatio = 'logo___asset___fluid___aspectRatio',
  LogoAssetFluidSrc = 'logo___asset___fluid___src',
  LogoAssetFluidSrcSet = 'logo___asset___fluid___srcSet',
  LogoAssetFluidSrcWebp = 'logo___asset___fluid___srcWebp',
  LogoAssetFluidSrcSetWebp = 'logo___asset___fluid___srcSetWebp',
  LogoAssetFluidSizes = 'logo___asset___fluid___sizes',
  LogoAssetRawMetadata = 'logo___asset____rawMetadata',
  LogoAssetId = 'logo___asset___id',
  LogoAssetParentId = 'logo___asset___parent___id',
  LogoAssetParentChildren = 'logo___asset___parent___children',
  LogoAssetChildren = 'logo___asset___children',
  LogoAssetChildrenId = 'logo___asset___children___id',
  LogoAssetChildrenChildren = 'logo___asset___children___children',
  LogoAssetInternalContent = 'logo___asset___internal___content',
  LogoAssetInternalContentDigest = 'logo___asset___internal___contentDigest',
  LogoAssetInternalDescription = 'logo___asset___internal___description',
  LogoAssetInternalFieldOwners = 'logo___asset___internal___fieldOwners',
  LogoAssetInternalIgnoreType = 'logo___asset___internal___ignoreType',
  LogoAssetInternalMediaType = 'logo___asset___internal___mediaType',
  LogoAssetInternalOwner = 'logo___asset___internal___owner',
  LogoAssetInternalType = 'logo___asset___internal___type',
  LogoAssetChildImageSharpId = 'logo___asset___childImageSharp___id',
  LogoAssetChildImageSharpChildren = 'logo___asset___childImageSharp___children',
  LogoHotspotKey = 'logo___hotspot____key',
  LogoHotspotType = 'logo___hotspot____type',
  LogoHotspotX = 'logo___hotspot___x',
  LogoHotspotY = 'logo___hotspot___y',
  LogoHotspotHeight = 'logo___hotspot___height',
  LogoHotspotWidth = 'logo___hotspot___width',
  LogoCropKey = 'logo___crop____key',
  LogoCropType = 'logo___crop____type',
  LogoCropTop = 'logo___crop___top',
  LogoCropBottom = 'logo___crop___bottom',
  LogoCropLeft = 'logo___crop___left',
  LogoCropRight = 'logo___crop___right',
  Description = 'description',
  DescriptionKey = 'description____key',
  DescriptionType = 'description____type',
  DescriptionSanityChildren = 'description___sanityChildren',
  DescriptionSanityChildrenKey = 'description___sanityChildren____key',
  DescriptionSanityChildrenType = 'description___sanityChildren____type',
  DescriptionSanityChildrenMarks = 'description___sanityChildren___marks',
  DescriptionSanityChildrenText = 'description___sanityChildren___text',
  DescriptionStyle = 'description___style',
  DescriptionList = 'description___list',
  RawDescription = '_rawDescription',
  RawLogo = '_rawLogo',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanitySponsorFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  logo?: Maybe<SanityImageFilterInput>,
  description?: Maybe<SanityBlockFilterListInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanitySponsorGroupConnection = {
   __typename?: 'SanitySponsorGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySponsorEdge>,
  nodes: Array<SanitySponsor>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanitySponsorRead = {
   __typename?: 'SanitySponsorRead',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  sponsor?: Maybe<SanitySponsor>,
  copy?: Maybe<Array<Maybe<SanityBlock>>>,
};

export type SanitySponsorReadFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  sponsor?: Maybe<SanitySponsorFilterInput>,
  copy?: Maybe<SanityBlockFilterListInput>,
};

export type SanitySponsorReadFilterListInput = {
  elemMatch?: Maybe<SanitySponsorReadFilterInput>,
};

export type SanitySponsorSortInput = {
  fields?: Maybe<Array<Maybe<SanitySponsorFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataAbout = 'siteMetadata___about',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataImage = 'siteMetadata___image',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsStylesProviderInjectFirst = 'pluginCreator___pluginOptions___stylesProvider___injectFirst',
  PluginCreatorPluginOptionsModules = 'pluginCreator___pluginOptions___modules',
  PluginCreatorPluginOptionsProjectId = 'pluginCreator___pluginOptions___projectId',
  PluginCreatorPluginOptionsDataset = 'pluginCreator___pluginOptions___dataset',
  PluginCreatorPluginOptionsWatchMode = 'pluginCreator___pluginOptions___watchMode',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsRuleInclude = 'pluginCreator___pluginOptions___rule___include',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsStrict = 'pluginCreator___pluginOptions___strict',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsUsername = 'pluginCreator___pluginOptions___username',
  PluginCreatorPluginOptionsExclude = 'pluginCreator___pluginOptions___exclude',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsStrict = 'pluginOptions___plugins___pluginOptions___strict',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsStylesProviderInjectFirst = 'pluginOptions___stylesProvider___injectFirst',
  PluginOptionsModules = 'pluginOptions___modules',
  PluginOptionsWebFontsConfigFontsGoogle = 'pluginOptions___webFontsConfig___fonts___google',
  PluginOptionsProjectId = 'pluginOptions___projectId',
  PluginOptionsDataset = 'pluginOptions___dataset',
  PluginOptionsWatchMode = 'pluginOptions___watchMode',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsRuleInclude = 'pluginOptions___rule___include',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsStrict = 'pluginOptions___strict',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  minify?: Maybe<Scalars['Boolean']>,
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>,
  modules?: Maybe<Array<Maybe<Scalars['String']>>>,
  webFontsConfig?: Maybe<SitePluginPluginOptionsWebFontsConfig>,
  projectId?: Maybe<Scalars['String']>,
  dataset?: Maybe<Scalars['String']>,
  watchMode?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  rule?: Maybe<SitePluginPluginOptionsRule>,
  maxWidth?: Maybe<Scalars['Int']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  strict?: Maybe<Scalars['String']>,
  trackingId?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  minify?: Maybe<BooleanQueryOperatorInput>,
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>,
  modules?: Maybe<StringQueryOperatorInput>,
  webFontsConfig?: Maybe<SitePluginPluginOptionsWebFontsConfigFilterInput>,
  projectId?: Maybe<StringQueryOperatorInput>,
  dataset?: Maybe<StringQueryOperatorInput>,
  watchMode?: Maybe<BooleanQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  rule?: Maybe<SitePluginPluginOptionsRuleFilterInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  strict?: Maybe<StringQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  username?: Maybe<StringQueryOperatorInput>,
  exclude?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  maxWidth?: Maybe<Scalars['Int']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  strict?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  strict?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsRule = {
   __typename?: 'SitePluginPluginOptionsRule',
  include?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsRuleFilterInput = {
  include?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsStylesProvider = {
   __typename?: 'SitePluginPluginOptionsStylesProvider',
  injectFirst?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsWebFontsConfig = {
   __typename?: 'SitePluginPluginOptionsWebFontsConfig',
  fonts?: Maybe<SitePluginPluginOptionsWebFontsConfigFonts>,
};

export type SitePluginPluginOptionsWebFontsConfigFilterInput = {
  fonts?: Maybe<SitePluginPluginOptionsWebFontsConfigFontsFilterInput>,
};

export type SitePluginPluginOptionsWebFontsConfigFonts = {
   __typename?: 'SitePluginPluginOptionsWebFontsConfigFonts',
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsWebFontsConfigFontsGoogle>>>,
};

export type SitePluginPluginOptionsWebFontsConfigFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsWebFontsConfigFontsGoogleFilterListInput>,
};

export type SitePluginPluginOptionsWebFontsConfigFontsGoogle = {
   __typename?: 'SitePluginPluginOptionsWebFontsConfigFontsGoogle',
  family?: Maybe<Scalars['String']>,
  variants?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsWebFontsConfigFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>,
  variants?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsWebFontsConfigFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsWebFontsConfigFontsGoogleFilterInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  about?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  about?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};
export type GatsbySanityImageFixedFragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_NoBase64Fragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_WithWebpFragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'SanityImageFixed' }
  & Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbySanityImageFluidFragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_NoBase64Fragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_WithWebpFragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'SanityImageFluid' }
  & Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'image'>
    )> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { avatar: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      > }
    )> }
  )>, site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author' | 'about'>
    )> }
  )> }
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type HomePageQueryQueryVariables = {};


export type HomePageQueryQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description'>
    )> }
  )>, allSanityHost: (
    { __typename?: 'SanityHostConnection' }
    & { edges: Array<(
      { __typename?: 'SanityHostEdge' }
      & { node: (
        { __typename?: 'SanityHost' }
        & Pick<SanityHost, 'name' | 'linkedin' | 'twitter' | 'instagram' | '_rawDescription'>
        & { image: Maybe<(
          { __typename?: 'SanityImage' }
          & Pick<SanityImage, '_key' | '_type'>
          & { asset: Maybe<(
            { __typename?: 'SanityImageAsset' }
            & { fluid: Maybe<(
              { __typename?: 'SanityImageFluid' }
              & Pick<SanityImageFluid, 'src'>
            )> }
          )> }
        )> }
      ) }
    )> }
  ), allSanityEpisode: (
    { __typename?: 'SanityEpisodeConnection' }
    & { edges: Array<(
      { __typename?: 'SanityEpisodeEdge' }
      & { node: (
        { __typename?: 'SanityEpisode' }
        & Pick<SanityEpisode, 'featured' | 'description' | 'duration' | 'explicit' | 'fileUrl' | 'summary' | '_rawContent' | '_rawLinkList' | 'tags' | 'title' | 'subtitle'>
        & { coverArt: Maybe<(
          { __typename?: 'SanityImage' }
          & { asset: Maybe<(
            { __typename?: 'SanityImageAsset' }
            & { fluid: Maybe<(
              { __typename?: 'SanityImageFluid' }
              & Pick<SanityImageFluid, 'src'>
            )> }
          )> }
        )>, itunes: Maybe<(
          { __typename?: 'SanityItunesEpisodeSettings' }
          & Pick<SanityItunesEpisodeSettings, 'season' | 'type'>
        )>, schedule: Maybe<(
          { __typename?: 'SanitySchedule' }
          & Pick<SanitySchedule, 'publish'>
        )> }
      ) }
    )> }
  ) }
);

export type PodcastEpisodeBySlugQueryVariables = {
  slug: Scalars['String']
};


export type PodcastEpisodeBySlugQuery = (
  { __typename?: 'Query' }
  & { sanityEpisode: Maybe<(
    { __typename?: 'SanityEpisode' }
    & Pick<SanityEpisode, 'id' | 'subtitle' | 'summary' | 'tags' | 'title'>
    & { internal: (
      { __typename?: 'Internal' }
      & Pick<Internal, 'content' | 'description' | 'ignoreType' | 'mediaType'>
    ), itunes: Maybe<(
      { __typename?: 'SanityItunesEpisodeSettings' }
      & Pick<SanityItunesEpisodeSettings, 'season' | 'type'>
    )>, linkList: Maybe<Array<Maybe<(
      { __typename?: 'SanityLinkListItem' }
      & Pick<SanityLinkListItem, 'URL' | 'excerpt' | 'title'>
    )>>>, file: Maybe<(
      { __typename?: 'SanityFile' }
      & { asset: Maybe<(
        { __typename?: 'SanityFileAsset' }
        & Pick<SanityFileAsset, 'url'>
      )> }
    )> }
  )> }
);
