from bs4 import BeautifulSoup
import requests
import json
from os import listdir
from os.path import isfile, join
from django.http import JsonResponse

def Scraping(url, element, Dict):
    URL = url
    result = requests.get(URL)
    source = result.content
    soup = BeautifulSoup(source, "lxml")
    Element = soup.find_all(element, Dict)
    return Element

def Local_Scraping(url_file, element, Dic):
    file = open(url_file, "r")
    contents = file.read()
    Soup = BeautifulSoup(contents, 'lxml')
    Result = Soup.find_all(element, Dic)
    return Result

def Get_Data(request, request_name='result'):

    """
        To Get Data  =>  Get_Data().get( data_name )
        Send Data    =>  return JsonResponse( {'key', 'value'} )
    """

    is_ajax = request.headers.get('request') == 'result'
    if is_ajax:
        if request.method == 'POST':
            data = json.load(request)
            return data
        else:
            return False
    else:
        return False

def Search_App(start_folder, app_name, type, *Refused, Result=[]):
    global folders, files
    Folders = [ch for ch in listdir(start_folder) if not isfile(join(start_folder, ch))]
    for ch in range(len(Folders)):
        try:
            if Folders[ch] not in Refused:
                path = f"{start_folder}{Folders[ch]}\\"
                Files = [ch for ch in listdir(path) if isfile(join(path, ch))]

                if Files:
                    ...  # files += len(Files)
                # folders += 1
                if app_name == Folders[ch] and type.lower() == "folder":
                    Result.append(path[:-1])
                if type.lower() != "folder":
                    for ch in Files:
                        if app_name == ch[:(ch.index("."))]:
                            Result.append(path + ch)
                # print(f"{folders + files}) \033[93m {path}\033[0m")

                Search_App(path, app_name, type)
        except:
            ...
    return (Result)
