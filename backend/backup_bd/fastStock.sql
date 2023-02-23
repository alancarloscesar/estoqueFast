PGDMP         9                {         	   fastStock    14.5    14.5 /    3           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            4           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            5           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            6           1262    40960 	   fastStock    DATABASE     k   CREATE DATABASE "fastStock" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "fastStock";
                postgres    false            �            1259    77293    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    77321 
   categories    TABLE     �   CREATE TABLE public.categories (
    name text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    77369    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    212            7           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    215            �            1259    77312    products    TABLE     j  CREATE TABLE public.products (
    name text NOT NULL,
    color text DEFAULT 'Sem cor'::text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL,
    category_id integer NOT NULL,
    size_id integer NOT NULL,
    stock boolean DEFAULT false NOT NULL,
    measure text NOT NULL,
    amount numeric(9,2)
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    77379    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    211            8           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    216            �            1259    77339    salesNow    TABLE       CREATE TABLE public."salesNow" (
    date_sale timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    amount numeric(9,2) NOT NULL,
    price numeric(9,2) NOT NULL,
    id integer NOT NULL,
    product_id integer NOT NULL,
    size_id integer NOT NULL,
    card text DEFAULT 'null'::text,
    installment text DEFAULT 'null'::text,
    payment text DEFAULT 'null'::text,
    month text DEFAULT 'null'::text,
    year text DEFAULT 'null'::text,
    hours text DEFAULT 'null'::text,
    "saleCont" integer DEFAULT 1
);
    DROP TABLE public."salesNow";
       public         heap    postgres    false            �            1259    77389    salesNow_id_seq    SEQUENCE     �   CREATE SEQUENCE public."salesNow_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."salesNow_id_seq";
       public          postgres    false    214            9           0    0    salesNow_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."salesNow_id_seq" OWNED BY public."salesNow".id;
          public          postgres    false    217            �            1259    77330    sizes    TABLE     �   CREATE TABLE public.sizes (
    name text NOT NULL,
    price numeric(9,2) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL,
    category_id integer NOT NULL
);
    DROP TABLE public.sizes;
       public         heap    postgres    false            �            1259    77397    sizes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sizes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.sizes_id_seq;
       public          postgres    false    213            :           0    0    sizes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.sizes_id_seq OWNED BY public.sizes.id;
          public          postgres    false    218            �            1259    77302    users    TABLE     �   CREATE TABLE public.users (
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    access text DEFAULT 'admin'::text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    77407    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            ;           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            ~           2604    77370    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    212            z           2604    77380    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    211            �           2604    77390    salesNow id    DEFAULT     n   ALTER TABLE ONLY public."salesNow" ALTER COLUMN id SET DEFAULT nextval('public."salesNow_id_seq"'::regclass);
 <   ALTER TABLE public."salesNow" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    214            �           2604    77398    sizes id    DEFAULT     d   ALTER TABLE ONLY public.sizes ALTER COLUMN id SET DEFAULT nextval('public.sizes_id_seq'::regclass);
 7   ALTER TABLE public.sizes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    213            x           2604    77408    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    210            &          0    77293    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   �8       )          0    77321 
   categories 
   TABLE DATA           :   COPY public.categories (name, created_at, id) FROM stdin;
    public          postgres    false    212   v>       (          0    77312    products 
   TABLE DATA           m   COPY public.products (name, color, created_at, id, category_id, size_id, stock, measure, amount) FROM stdin;
    public          postgres    false    211   �>       +          0    77339    salesNow 
   TABLE DATA           �   COPY public."salesNow" (date_sale, amount, price, id, product_id, size_id, card, installment, payment, month, year, hours, "saleCont") FROM stdin;
    public          postgres    false    214   �?       *          0    77330    sizes 
   TABLE DATA           I   COPY public.sizes (name, price, created_at, id, category_id) FROM stdin;
    public          postgres    false    213   .A       '          0    77302    users 
   TABLE DATA           N   COPY public.users (name, email, password, access, created_at, id) FROM stdin;
    public          postgres    false    210   nA       <           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 3, true);
          public          postgres    false    215            =           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 8, true);
          public          postgres    false    216            >           0    0    salesNow_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."salesNow_id_seq"', 31, true);
          public          postgres    false    217            ?           0    0    sizes_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.sizes_id_seq', 1, true);
          public          postgres    false    218            @           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    219            �           2606    77301 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    77372    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    212            �           2606    77382    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    211            �           2606    77392    salesNow salesNow_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_pkey";
       public            postgres    false    214            �           2606    77400    sizes sizes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.sizes DROP CONSTRAINT sizes_pkey;
       public            postgres    false    213            �           2606    77410    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            �           2606    77417 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    212    3217    211            �           2606    77422    products products_size_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_size_id_fkey FOREIGN KEY (size_id) REFERENCES public.sizes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.products DROP CONSTRAINT products_size_id_fkey;
       public          postgres    false    213    211    3219            �           2606    77432 !   salesNow salesNow_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 O   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_product_id_fkey";
       public          postgres    false    211    3215    214            �           2606    77445    salesNow salesNow_size_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_size_id_fkey" FOREIGN KEY (size_id) REFERENCES public.sizes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_size_id_fkey";
       public          postgres    false    213    3219    214            �           2606    77427    sizes sizes_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public.sizes DROP CONSTRAINT sizes_category_id_fkey;
       public          postgres    false    212    3217    213            &   �  x��WYncG��N���kU�1'0Ш������A���f��
\ �bFfDd<;�%IJ�eŚ�һd1����Z�.k��c�����F�S�RIs���
��ks��&!n\����"$Z�#Ŀ�<Q}Rz3O+���
��k_��v��ח�����_����ۗ���_�������;�Z�?����жf��Z�T�h�ˬ��v�}� Y�de�:��>GxϦU��6)����g��+�[kC�;��V��L�^�b���L�H�"{�(ג�-�2����n���
�+F~)�`q��-k$��u��&�u����ڭ�
p4^����I�I룻��$��b@Ի��!z�����S�N�]���%�L��,ݾ/�w��a��2_s'={�j��:&9ZЂu��||Y���s��~_����O�C�YD��e������0�S16�J$GQ[��I�=/[f�/�9*ƌ

ν��^��1���ZC��gf<FM�S?�W����|zF�c��,~�X&�e٘@���\0���s�Rξ�pМ3/kP�6�>&�`AJ���z��ݏfw=�"�;�"R�Ws`4�L��tm~�޼!�bx��9�y]e��ld�_��ŧs���`���U��ꡡViĜp�:�`ڨ<U��7��3��򑴑�;!1�D���Y��c����rw/WÂ�w���,M�3�3�ŏ��VO�Pլ�nBu�A+��C��@9����T�����uH�9>��藆�e�ې6Q5Z�퀒bf��$5Qڤ�o^,�!��6�K聆�N��1�	%Yw�c:�d��h3?��a4oJ�"#�_�0�H�0$*Gx7��Qٰ�A�R���/:����"�Q��g�9ъ�>#����	��|f)��H��_y��U)w!�`�^S�ߡ��PT�\�)E��$*d�o�����ݛ�hl����#��6�"5��щ���=����'�G	�mƛ�c���	)������;4�7�f9>��Rʳ[��!�#�/�,��S3>k�!Hg��g�����F������`������!%�>"����(��o����	g.T{G�[TF�(���E	ӻ��rdol-(E�8�%�a����6^����Ј�X]���@X��mDx��5�"�u�߱PK���(`v/`Ⴊf�`Z0;4�;��U.M;vt�1Rᙹ�1^YΉQ�v��-�Ʋ�/����V� ��}>}<K��Fē�a~�	9��9H�.F:���y�W��b���:
j��*���'	#C�����yPc���o���G1���^Ϊv��"� �E�~�/p��!:T�h��ąj���Y遤@;#q����
:D�+	&��������@ |���Z�Ɠ٣!j��!���=������gI��n��J� (�{������`��Q벬�P�Iߨ7ǵP��ٵ�9,h�X2��V��D��w3�U��ѥ6�wNǕH!�Dt;fuC�������=5�2      )   d   x�NL��I,VK�JLI,�4202�50"C+K+C=s3cNC���������/�G�2V04�22�2��3�4�4�
��������H��̜Ә+F��� �(      (   �   x�u�AN�0EדS���;v��� 	�"X���UJ�*Ɋpҋ�BQ��h���7�ۺlY�us��mW��P}@���Ĥv�:�<Vdܿ�\���i�#��+���đ�!���~��y��g7���&O�;?�P�n��˸9V�P������"'��eFO�4_���U:�Ȅt��<�懽
���	��4��J�M4ء��(a_7�A5�r�^�w��ĭ�`F��¿�(����}�      +   &  x���Mj�P��un �����҉�젂����l���J55�L��Í���$�rH�Qt
�@��~���s� ޻�~�F��1�nd���M` Pu,���}^ S��/#�q�p"�޹Gj��Zo���n$�HekВ��b�S��Ȣ�ܤH�2:��=JRT���Jn��V�[IZ��$TY�$�!$���rF,�ڪH����4�qq�)<��3�$�a�(��v��4w��ݾ!��y�)=nh�$*��l�R�Q9��Կ���d
�y��i�3(��      *   0   x��N�41�30�4202�50"C+C#+=KKNCNC�=... ��Z      '   y   x�s�I��L)�ez����*F�**�yz�A�&y�AiQ�Q�I�>�F���e�eQ�Qn&�)��΁����)�)�yA�F���)��y�FFƺF@�``he`aeb�gid�i����� 8 �     